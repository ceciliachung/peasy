import React, { useEffect } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { createNewPref } from "../store/storePrefs";
import { globalStyles } from "../../styles/globalStyles";

export default function NewStorePref(props) {
  const { name, address, latitude, longitude, category } = props;
  const storeObj = { storeName: name, address, latitude, longitude, category };
  const dispatch = useDispatch();
  return (
    <View style={{ alignItems: "stretch", flexDirection: "row", justifyContent: "center", width: "100%", marginVertical: '5%'  }}>
      <View style={{ flex: 2, marginLeft: "5%" }}>
        <Text>Add {props.name} to your list?</Text>
        <Text>{props.address}</Text>
      </View>

      <View style={{ flex: 1}}>
        {/* props.addNewPreference(storeObj) */}
        <TouchableOpacity onPress={() => props.addNewPreference(storeObj)} title="save">
          <Text style={globalStyles.buttonSave}>
            Save
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
