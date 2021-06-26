import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import CustomerTransactions from "../Screens/CustomerTransactions";
import Home from "../Screens/Home";
import { colors } from "../config/colors";

const Stack = createStackNavigator();

export default function HomeNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        options={({ route }) => ({
          title: route.params.name,
          headerStyle: { backgroundColor: colors.red },
          headerTintColor: colors.white,
        })}
        name="CustomerTransactions"
        component={CustomerTransactions}
      />
    </Stack.Navigator>
  );
}
