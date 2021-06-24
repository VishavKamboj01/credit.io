import React from "react";
import { StyleSheet, Text, View } from "react-native";

import AppToolbar from "../Components/AppToolbar";
import AppList from "../Components/AppList";
import AppButton from "../Components/AppButton";
import { colors } from "../config/colors";

import logo from "../assets/logo_white.png";
import Searchbar from "../Components/Searchbar";

const menuItems = [
  {
    id: "1",
    title: "Item 1",
  },
  {
    id: "2",
    title: "Item 2",
  },
  {
    id: "3",
    title: "Item 3",
  },
];

const customers = [
  {
    id: "1",
    name: "Vishavjeet Singh",
    recentActivity: "Accepted Payment: Rs.12000",
    payment: "Rs.10000",
    paymentStatus: "Due",
  },
  {
    id: "2",
    name: "Akashdeep Singh",
    recentActivity: "Credit: Rs.9000",
    payment: "Rs.9000",
    paymentStatus: "Due",
  },
  {
    id: "3",
    name: "Person 3",
    recentActivity: "Accepted Payment: Rs.3000",
    payment: "Rs.3000",
    paymentStatus: "Advance",
  },
  {
    id: "4",
    name: "Person 4",
    recentActivity: "Credit: Rs.1000",
    payment: "Rs.2000",
    paymentStatus: "Due",
  },
  {
    id: "5",
    name: "Vishavjeet Singh",
    recentActivity: "Accepted Payment: Rs.12000",
    payment: "Rs.10000",
    paymentStatus: "Due",
  },
  {
    id: "6",
    name: "Akashdeep Singh",
    recentActivity: "Credit: Rs.9000",
    payment: "Rs.9000",
    paymentStatus: "Due",
  },
  {
    id: "7",
    name: "Person 3",
    recentActivity: "Accepted Payment: Rs.3000",
    payment: "Rs.3000",
    paymentStatus: "Advance",
  },
  {
    id: "8",
    name: "Person 4",
    recentActivity: "Credit: Rs.1000",
    payment: "Rs.2000",
    paymentStatus: "Due",
  },
  {
    id: "9",
    name: "Vishavjeet Singh",
    recentActivity: "Accepted Payment: Rs.12000",
    payment: "Rs.10000",
    paymentStatus: "Due",
  },
  {
    id: "10",
    name: "Akashdeep Singh",
    recentActivity: "Credit: Rs.9000",
    payment: "Rs.9000",
    paymentStatus: "Due",
  },
  {
    id: "11",
    name: "Person 3",
    recentActivity: "Accepted Payment: Rs.3000",
    payment: "Rs.3000",
    paymentStatus: "Advance",
  },
  {
    id: "12",
    name: "Person 4",
    recentActivity: "Credit: Rs.1000",
    payment: "Rs.2000",
    paymentStatus: "Due",
  },
  {
    id: "13",
    name: "Vishavjeet Singh",
    recentActivity: "Accepted Payment: Rs.12000",
    payment: "Rs.10000",
    paymentStatus: "Due",
  },
  {
    id: "14",
    name: "Akashdeep Singh",
    recentActivity: "Credit: Rs.9000",
    payment: "Rs.9000",
    paymentStatus: "Due",
  },
  {
    id: "15",
    name: "Person 3",
    recentActivity: "Accepted Payment: Rs.3000",
    payment: "Rs.3000",
    paymentStatus: "Advance",
  },
  {
    id: "16",
    name: "Person 4",
    recentActivity: "Credit: Rs.1000",
    payment: "Rs.2000",
    paymentStatus: "Due",
  },
];

export default function Home() {
  const handleMenuItemPressed = (id) => {};

  const handleListItemPressed = (id) => {};

  return (
    <View style={styles.container}>
      <AppToolbar
        style={styles.toolbar}
        logo={logo}
        title="Home"
        menuItems={menuItems}
        onMenuItemPressed={handleMenuItemPressed}
      />
      <Searchbar />
      <AppList
        customers={customers}
        onListItemPressed={handleListItemPressed}
      />
      <AppButton style={styles.addCustomerButton} title="Add Customer" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  toolbar: {
    backgroundColor: colors.red,
  },

  addCustomerButton: {
    backgroundColor: colors.red,
    width: 200,
    position: "absolute",
    bottom: 10,
    right: 10,
    elevation: 10,
  },
});
