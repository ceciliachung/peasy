import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Text, TextInput, View, ScrollView, ImageBackground, Button } from "react-native";
import { globalStyles } from "../../styles/globalStyles";
import { Formik } from "formik";


export default function AddNewItem() {
    return (
        <ImageBackground source={require("../../assets/peas.jpg")} style={globalStyles.background}>
            <View style={globalStyles.backgroundBox}>
                <Text style={globalStyles.titleText}> Add a new item to your list: </Text>

                {/* <View style={{ justifyContent: "center" }}> */}
                <Formik
                    initialValues={{ itemName: "", quantity: "" }}
                    validate={(values) => {
                        const errors = {};
                        if (!values.itemName) {
                            errors.itemName = "Required";
                        } else if (!values.quantity) {
                            errors.quantity = "Rquired";
                        }
                        return errors;
                    }}
                >
                    {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
                        <View style={globalStyles.signUpForm}>
                            <View >
                                <Text>
                                    Item Name <Text style={{ color: "red" }}> </Text>
                                </Text>
                                <TextInput
                                    style={globalStyles.InputField}
                                    onChangeText={handleChange("itemName")}
                                    onBlur={handleBlur("itemName")}
                                    value={values.itemName}
                                />
                            </View>

                            <View style={{ marginTop: 30 }}>
                                <Text>
                                    Item Quantity <Text style={{ color: "red" }}> {errors.email ? errors.email : ""}</Text>
                                </Text>
                                <TextInput
                                    style={globalStyles.InputField}
                                    onChangeText={handleChange("quantity")}
                                    onBlur={handleBlur("quantity")}
                                    value={values.quantity}
                                />
                                <Button onPress={handleSubmit} title="Add" />
                            </View>
                        </View>
                    )}
                </Formik>

            </View>
        </ImageBackground>
    )
}