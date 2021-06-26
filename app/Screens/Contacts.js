import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text, Alert, FlatList } from "react-native";
import * as Contact from "expo-contacts";

import AppComponent from "../Components/AppComponent";
import AppListItem from "../Components/AppListItem";
import AppListItemSeperator from "../Components/AppListItemSeperator";

export default function Contacts() {
  const [contacts, setContacts] = useState([]);
  const [accessPermission, setAccessPermission] = useState(false);

  useEffect(() => {
    getContacts();
  }, [accessPermission]);

  const getContacts = async () => {
    const status = await requestContactsPermission();
    if (status === "granted") {
      const { data } = await Contact.getContactsAsync();
      setContacts(data);
      return;
    }
    setAccessPermission(false);
    showAlert();
  };

  const requestContactsPermission = async () => {
    const { status } = await Contact.requestPermissionsAsync();
    return status;
  };

  const showAlert = () => {
    Alert.alert(
      "Permission Denied",
      "Without your permission we won't be able to access your contacts. Would you like to give us your permission?",
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
    setAccessPermission(true);
  };

  return (
    <AppComponent title="Contacts">
      <View>
        <FlatList
          data={contacts}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <AppListItem
              name={item.name}
              subTitle={item.phoneNumbers[0].number}
            ></AppListItem>
          )}
          ItemSeparatorComponent={() => <AppListItemSeperator />}
        ></FlatList>
      </View>
    </AppComponent>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 84,
  },
});
