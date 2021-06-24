import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import StartUp from "../Screens/StartUp";
import Login from "../Screens/Login";
import SignUp from "../Screens/SignUp";
import Home from "../Screens/Home";

const Stack = createStackNavigator();

export default function AppNavigator({ children }) {
  return (
    <NavigationContainer>
      <Stack.Navigator>
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
        <Stack.Screen
          options={{ headerShown: false }}
          name="Home"
          component={Home}
        />
      </Stack.Navigator>
      {children}
    </NavigationContainer>
  );
}
