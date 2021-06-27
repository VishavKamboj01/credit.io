import React from "react";
import { StyleSheet, View } from "react-native";

import AppToolbar from "./AppToolbar";
import { colors } from "../config/colors";
import logo from "../assets/logo_white.png";

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

export default function AppComponent({ children, title, onSearchIconPress }) {
  const handleMenuItemPressed = (id) => {};

  return (
    <View style={styles.container}>
      <AppToolbar
        style={styles.toolbar}
        logo={logo}
        title={title}
        menuItems={menuItems}
        onMenuItemPressed={handleMenuItemPressed}
        onSearchIconPress={onSearchIconPress}
      />
      {children}
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
});
