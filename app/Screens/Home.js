import React, { useEffect } from "react";
import { StyleSheet, View, Text } from "react-native";

import AppList from "../Components/AppList";
import Searchbar from "../Components/Searchbar";
import { colors } from "../config/colors";
import AppComponent from "../Components/AppComponent";
import { useState } from "react/cjs/react.development";

const customers = [
  {
    id: "1",
    name: "Vishavjeet Singh",
    recentActivity: "Accepted Payment: Rs.12000",
    payment: "Rs.10000",
    paymentStatus: "Due",
    imageUri: "",
  },
  {
    id: "2",
    name: "Akashdeep Singh",
    recentActivity: "Credit: Rs.9000",
    payment: "Rs.9000",
    paymentStatus: "Due",
    imageUri: "",
  },
  {
    id: "3",
    name: "Person 3",
    recentActivity: "Accepted Payment: Rs.3000",
    payment: "Rs.3000",
    paymentStatus: "Advance",
    imageUri: "",
  },
  {
    id: "4",
    name: "Person 4",
    recentActivity: "Credit: Rs.1000",
    payment: "Rs.2000",
    paymentStatus: "Due",
    imageUri: "",
  },
  {
    id: "5",
    name: "Vishavjeet Singh",
    recentActivity: "Accepted Payment: Rs.12000",
    payment: "Rs.10000",
    paymentStatus: "Due",
    imageUri: "",
  },
  {
    id: "6",
    name: "Akashdeep Singh",
    recentActivity: "Credit: Rs.9000",
    payment: "Rs.9000",
    paymentStatus: "Due",
    imageUri: "",
  },
  {
    id: "7",
    name: "Person 3",
    recentActivity: "Accepted Payment: Rs.3000",
    payment: "Rs.3000",
    paymentStatus: "Advance",
    imageUri: "",
  },
  {
    id: "8",
    name: "Person 4",
    recentActivity: "Credit: Rs.1000",
    payment: "Rs.2000",
    paymentStatus: "Due",
    imageUri: "",
  },
  {
    id: "9",
    name: "Vishavjeet Singh",
    recentActivity: "Accepted Payment: Rs.12000",
    payment: "Rs.10000",
    paymentStatus: "Due",
    imageUri: "",
  },
  {
    id: "10",
    name: "Akashdeep Singh",
    recentActivity: "Credit: Rs.9000",
    payment: "Rs.9000",
    paymentStatus: "Due",
    imageUri: "",
  },
  {
    id: "11",
    name: "Person 3",
    recentActivity: "Accepted Payment: Rs.3000",
    payment: "Rs.3000",
    paymentStatus: "Advance",
    imageUri: "",
  },
  {
    id: "12",
    name: "Person 4",
    recentActivity: "Credit: Rs.1000",
    payment: "Rs.2000",
    paymentStatus: "Due",
    imageUri: "",
  },
  {
    id: "13",
    name: "Vishavjeet Singh",
    recentActivity: "Accepted Payment: Rs.12000",
    payment: "Rs.10000",
    paymentStatus: "Due",
    imageUri: "",
  },
  {
    id: "14",
    name: "Akashdeep Singh",
    recentActivity: "Credit: Rs.9000",
    payment: "Rs.9000",
    paymentStatus: "Due",
    imageUri: "",
  },
  {
    id: "15",
    name: "Person 3",
    recentActivity: "Accepted Payment: Rs.3000",
    payment: "Rs.3000",
    paymentStatus: "Advance",
    imageUri: "",
  },
  {
    id: "16",
    name: "Person 4",
    recentActivity: "Credit: Rs.1000",
    payment: "Rs.2000",
    paymentStatus: "Due",
    imageUri: "",
  },
];

export default function Home({ navigation, route, customer }) {
  const [isSearchIconPressed, setSearchIconPressed] = useState(false);

  useEffect(() => {
    if (customer.phoneNumber != "") customers.push(customer);
  }, [customer]);

  const handleListItemPressed = (item) => {
    navigation.navigate("CustomerTransactions", { name: item.name });
  };

  const handleSearchIconPress = () => {
    if (isSearchIconPressed) setSearchIconPressed(false);
    else setSearchIconPressed(true);
  };

  return (
    <AppComponent title="Home" onSearchIconPress={handleSearchIconPress}>
      <View style={styles.container}>
        {isSearchIconPressed ? <Searchbar /> : <View></View>}

        <AppList items={customers} onListItemPressed={handleListItemPressed} />
      </View>
    </AppComponent>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  toolbar: {
    backgroundColor: colors.red,
  },
});
