import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text, ScrollView, Alert, Image } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { colors } from "../config/colors";
import AppInputField from "../Components/AppInputField";
import AppButton from "../Components/AppButton";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

export default function AddCustomer({ navigation }) {
  const [canAskAgain, setCanAskAgain] = useState(false);
  const [imageUri, setImageUri] = useState("");
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [id, setId] = useState(17);

  const requestPermission = async () => {
    const { granted } = await ImagePicker.requestCameraPermissionsAsync();
    if (!granted) showAlert();
  };

  useEffect(() => {
    requestPermission();
  }, [canAskAgain]);

  const showAlert = () => {
    Alert.alert(
      "Permission Denied",
      "This action needs to access your gallery. Would you like to give us your permission?",
      [
        {
          text: "No",
          style: "cancel",
        },
        { text: "Yes", onPress: handleYesPress },
      ]
    );
  };

  const handleYesPress = () => {
    setCanAskAgain(true);
  };

  const handleAddImagePress = () => {
    pickImage();
  };

  const pickImage = async () => {
    try {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });

      if (!result.cancelled) {
        setImageUri(result.uri);
      }
    } catch (err) {
      new Error("An error occured while reading Image");
    }
  };

  const handleAddCustomerPress = () => {
    const customer = {
      id: id.toString(),
      name: fullName,
      phoneNumber,
      address,
      imageUri,
      recentActivity: "No Transactions yet",
      payment: "",
      paymentStatus: "",
    };

    setId(id + 1);
    emptyInputFields();
    navigation.navigate({
      name: "HomeNavigator",
      params: { customer: customer },
      merge: true,
    });
  };

  const emptyInputFields = () => {
    setFullName("");
    setAddress("");
    setPhoneNumber("");
    setImageUri("");
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.dataInputsContainer}>
        <TouchableWithoutFeedback onPress={handleAddImagePress}>
          <View style={styles.imageInput}>
            {!imageUri ? (
              <View style={{ alignItems: "center" }}>
                <Text style={styles.addImage}>Add Image</Text>
                <MaterialCommunityIcons
                  name="plus"
                  color={colors.darkSilver}
                  size={40}
                />
              </View>
            ) : (
              <Image
                source={{ uri: imageUri }}
                style={{ width: 150, height: 150, borderRadius: 75 }}
              />
            )}
          </View>
        </TouchableWithoutFeedback>
        <AppInputField
          placeholder="Full Name"
          value={fullName}
          onChangeText={(text) => setFullName(text)}
        />
        <AppInputField
          placeholder="Phone Number"
          value={phoneNumber}
          onChangeText={(text) => setPhoneNumber(text)}
          keyboardType="number-pad"
        />
        <AppInputField
          placeholder="Address"
          value={address}
          numberOfLines={4}
          multiline={true}
          textAlignVertical="top"
          onChangeText={(text) => setAddress(text)}
        />
        <AppButton
          style={styles.addCustomerButton}
          title="Add Customer"
          onPress={handleAddCustomerPress}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: colors.white,
  },

  dataInputsContainer: {
    width: "100%",
    alignItems: "center",
    marginTop: 100,
  },

  imageInput: {
    width: 150,
    height: 150,
    borderRadius: 75,
    backgroundColor: colors.platinum,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 40,
  },

  addImage: {
    color: colors.darkSilver,
  },

  addCustomerButton: {
    backgroundColor: colors.red,
    width: "85%",
    marginTop: 20,
    borderWidth: 5,
    borderColor: colors.white,
    elevation: 10,
    marginBottom: 30,
  },
});
