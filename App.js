import "react-native-gesture-handler";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { MenuProvider } from "react-native-popup-menu";
import { StatusBar } from "expo-status-bar";

import AppNavigator from "./app/Navigation/AppNavigator";

export default function App() {
  return (
    <MenuProvider>
      <View style={styles.container}>
        <AppNavigator>
          <StatusBar style="auto" />
        </AppNavigator>
      </View>
    </MenuProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
