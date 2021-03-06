import React, { useEffect } from "react";
import { View, ImageBackground, SafeAreaView, FlatList, TouchableOpacity } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { getListPrivate, increaseItemQuantity, decreaseItemQuantity, deleteSingleItem } from "../store/listPrivate";
import { fetchListInfo } from "../store/listInfo";
import { globalStyles } from "../../styles/globalStyles";
import { Text, Icon, Body, Right, Button, ListItem, Card, Left, Container } from "native-base";
import { Actions } from "react-native-router-flux";

export default function ListPrivate() {

  const listPrivate = useSelector((state) => state.listPrivate);
  const listInfo = useSelector((state) => state.listInfo);
  const user = useSelector((state) => state.singleUser);
  const dispatch = useDispatch();

  const loadListPrivate = async (userId) => {
    await dispatch(fetchListInfo(userId));
    await dispatch(getListPrivate(userId));
  };
  const increase = async (itemId, listId, userId) => {
    console.log('list', listId)
    await dispatch(increaseItemQuantity(itemId, listId, userId));
    console.log('increasing')
    await dispatch(getListPrivate(userId));
  };
  const decrease = async (listId, itemId, userId) => {
    await dispatch(decreaseItemQuantity(listId, itemId, userId));
    console.log('decreasing')
    await dispatch(getListPrivate(userId));
  };
  const deleteItem = async (listId, itemId, userId) => {
    await dispatch(deleteSingleItem(listId, itemId));
    await dispatch(getListPrivate(userId));
  };

  useEffect(() => {
    loadListPrivate(user.id);
  }, [user.id]);

  const renderItem = ({ item }) => {
    return (
      <ListItem icon>
        <Left />
        <Body>
          <Text numberOfLines={1}>{item.item.itemName}</Text>
          <Text note numberOfLines={1}>
            Quantity: {item.quantity}
          </Text>
        </Body>
        <Right style={{ width: "35%" }}>
          <Button
            style={globalStyles.buttonPlusMinus}
            transparent
            onPress={async () => await increase(item.itemId, item.listId, item.userId)}
          >
            <Text>+</Text>
          </Button>
          <Button
            style={globalStyles.buttonPlusMinus}
            transparent
            onPress={async () => await decrease(item.itemId, item.listId, item.userId)}
          >
            <Text>-</Text>
          </Button>
          <Button
            style={globalStyles.buttonPlusMinus}
            transparent
            onPress={async () => await deleteItem(item.listId, item.itemId, item.userId)}
          >
            <Text>x</Text>
          </Button>
        </Right>
      </ListItem>
    );
  };

  const renderSample = ({ item }) => {
    return (
      <ListItem icon>
        <Left />
        <Body>
          <Text numberOfLines={1}>Your First Item</Text>
          <Text note numberOfLines={1}>
            Quantity: 100
          </Text>
        </Body>
        <Right style={{ width: "35%" }}>
          <Button
            style={globalStyles.buttonPlusMinus}
            transparent
            onPress={() => alert("This will increment your item count.")}
          >
            <Text>+</Text>
          </Button>
          <Button
            style={globalStyles.buttonPlusMinus}
            transparent
            onPress={() => alert("This will decrement your item count.")}
          >
            <Text>-</Text>
          </Button>
          <Button style={globalStyles.buttonPlusMinus} transparent onPress={() => alert("This will remove your item.")}>
            <Text>x</Text>
          </Button>
        </Right>
      </ListItem>
    );
  };

  return (
    <Container>
      <ImageBackground source={require("../../assets/peas.jpg")} style={globalStyles.background}>
        <View style={globalStyles.backgroundBox}>
          <View style={{ flex: 2 }}>
            {!user.id || listPrivate.length === 0 ? (
              <SafeAreaView
                style={{
                  marginTop: 30,
                  backgroundColor: "white",
                  height: "70%",
                  width: "95%",
                  alignSelf: "center",
                  borderRadius: 25,
                }}
              >
                <FlatList data={["sample"]} renderItem={renderSample} keyExtractor={(item) => item} />
              </SafeAreaView>
            ) : (
              <SafeAreaView
                style={{
                  marginTop: 30,
                  backgroundColor: "white",
                  height: "70%",
                  width: "95%",
                  alignSelf: "center",
                  borderRadius: 25,
                }}
              >
                <FlatList data={listPrivate} renderItem={renderItem} keyExtractor={(item) => item.id.toString()} />
              </SafeAreaView>
            )}
          </View>
          <View style={{ flex: 1, marginTop: "3%", justifyContent: "flex-end" }}>
            <TouchableOpacity
              onPress={() => Actions.AddNewItemPrivate({ listId: listInfo.listId, userId: user.id })}
              title="Add New Item"
            >
              <Text style={globalStyles.button}>Add New Item</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => Actions.Scanner({ listPrivate: listPrivate, userId: user.id })}
              title="Scanner"
            >
              <Text style={globalStyles.button}>Scan my receipt</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </Container>
  );
}
