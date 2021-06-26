import React from "react";
import { StyleSheet } from "react-native";

import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import Home from "../Screens/Home";
import Contacts from "../Screens/Contacts";
import { colors } from "../config/colors";
import AppComponent from "../Components/AppComponent";

const Tab = createMaterialBottomTabNavigator();

export default function BottomTabNavigation() {
  return (
    <AppComponent>
      <Tab.Navigator
        barStyle={styles.tab}
        activeColor={colors.white}
        shifting={true}
        sceneAnimationEnabled={true}
      >
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarLabel: "Home",
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="home" color={color} size={24} />
            ),
          }}
        />
        <Tab.Screen
          name="Contacts"
          component={Contacts}
          options={{
            tabBarLabel: "Contacts",
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="contacts" color={color} size={22} />
            ),
          }}
        />
      </Tab.Navigator>
    </AppComponent>
  );
}

const styles = StyleSheet.create({
  tab: {
    backgroundColor: colors.red,
    elevation: 30,
  },
});
