import React, { useState } from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";

import AppList from "../Components/AppList";
import { colors } from "../config/colors";
import AppComponent from "../Components/AppComponent";

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

export default function Home({ navigation }) {
  const handleListItemPressed = (item) => {
    navigation.navigate("CustomerTransactions", { name: item.name });
  };

  return (
    <AppComponent title="Home">
      <View style={styles.container}>
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
