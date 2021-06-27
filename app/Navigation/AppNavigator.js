import React from "react";
import { StyleSheet } from "react-native";

import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import HomeNavigation from "./HomeNavigation";
import Contacts from "../Screens/Contacts";
import AddCustomer from "../Screens/AddCustomer";
import { colors } from "../config/colors";
import AddCustomerButton from "../Components/AddCustomerButton";

const Tab = createBottomTabNavigator();

export default function AppNavigator() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: colors.red,
      }}
    >
      <Tab.Screen
        name="HomeNavigator"
        component={HomeNavigation}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
        initialParams={{
          customer: {
            fullName: "",
            phoneNumber: "",
            address: "",
            imageUri: "",
          },
        }}
      />
      <Tab.Screen
        name="AddCustomer"
        component={AddCustomer}
        options={({ navigation }) => ({
          tabBarButton: () => (
            <AddCustomerButton
              onPress={() => navigation.navigate("AddCustomer")}
            />
          ),
        })}
      />
      <Tab.Screen
        name="Contacts"
        component={Contacts}
        options={{
          tabBarLabel: "Contacts",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="contacts" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  tab: {
    backgroundColor: colors.red,
    elevation: 30,
  },
});
