import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { MenuProvider } from "react-native-popup-menu";
import { StatusBar } from "expo-status-bar";

import AppNavigator from "./app/Navigation/AppNavigator";
import AuthNavigator from "./app/Navigation/AuthNavigator";

export default function App() {
  return (
    <MenuProvider>
      <NavigationContainer>
        <View style={styles.container}>
          {/* <AuthNavigator /> */}
          <AppNavigator />
        </View>
        <StatusBar style="auto" />
      </NavigationContainer>
    </MenuProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
