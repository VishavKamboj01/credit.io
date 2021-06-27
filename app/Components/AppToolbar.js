import React, { useState } from "react";
import { View, StyleSheet, Text, Image, TouchableOpacity } from "react-native";
import { AntDesign, Ionicons } from "@expo/vector-icons";

import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from "react-native-popup-menu";
import { colors } from "../config/colors";
import SearchBarSeperator from "./SearchBarSeperator";

export default function AppToolbar({
  style,
  title,
  logo,
  children,
  menuItems,
  onMenuItemPressed,
  onSearchIconPress,
}) {
  return (
    <View style={[styles.ToolbarContainer, style]}>
      <View style={styles.logoContainer}>
        <Image source={logo} style={styles.logo} />
        <Text style={styles.title}>{title}</Text>
      </View>
      <View style={styles.iconsContainer}>
        <TouchableOpacity onPress={onSearchIconPress}>
          <Ionicons name="search-circle" size={30} color={colors.white} />
        </TouchableOpacity>
        <SearchBarSeperator />
        <Menu>
          <MenuTrigger>
            <AntDesign
              style={{ marginRight: 10 }}
              name="bars"
              color="white"
              size={30}
            ></AntDesign>
          </MenuTrigger>
          <MenuOptions>
            {menuItems.map((item) => {
              return (
                <MenuOption
                  key={item.id}
                  text={item.title}
                  onSelect={() => onMenuItemPressed(item.id)}
                />
              );
            })}
            {/* <MenuOption onSelect={() => alert(`Save`)} text="Save" />
          <MenuOption onSelect={() => alert(`Delete`)}>
            <Text style={{ color: "red" }}>Delete</Text>
          </MenuOption>
          <MenuOption
            onSelect={() => alert(`Not called`)}
            disabled={true}
            text="Disabled"
          /> */}
          </MenuOptions>
        </Menu>
      </View>

      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  ToolbarContainer: {
    height: 84,
    width: "100%",
    flexDirection: "row",
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: 24,
  },

  logoContainer: {
    flexDirection: "row",
    alignItems: "center",
  },

  logo: {
    width: 30,
    height: 30,
    marginLeft: 10,
  },

  title: {
    color: "white",
    fontSize: 16,
    marginLeft: 10,
  },

  iconsContainer: {
    flexDirection: "row",
  },
});
