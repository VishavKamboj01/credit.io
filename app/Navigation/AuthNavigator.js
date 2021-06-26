import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import StartUp from "../Screens/StartUp";
import Login from "../Screens/Login";
import SignUp from "../Screens/SignUp";

const Stack = createStackNavigator();

export default function AuthNavigator() {
  return (
    <Stack.Navigator mode="card">
      <Stack.Screen
        options={{ headerShown: false }}
        name="StartUp"
        component={StartUp}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="Login"
        component={Login}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="SignUp"
        component={SignUp}
      />
    </Stack.Navigator>
  );
}
