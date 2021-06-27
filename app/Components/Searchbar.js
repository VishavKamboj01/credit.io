import React from "react";
import { StyleSheet, View, TextInput } from "react-native";
import { colors } from "../config/colors";
import { MaterialIcons, Ionicons } from "@expo/vector-icons";
import SearchBarSeperator from "./SearchBarSeperator";

export default function Searchbar() {
  return (
    <View style={{ width: "100%", backgroundColor: colors.white }}>
      <View style={styles.container}>
        <MaterialIcons
          name="person-search"
          size={30}
          color={colors.red}
          style={{ marginStart: 5 }}
        />
        <SearchBarSeperator />
        <TextInput
          style={styles.searchField}
          selectionColor={colors.red}
          placeholder="Search Customers"
        ></TextInput>
        <SearchBarSeperator />
        <Ionicons
          name="ios-filter"
          size={25}
          color={colors.red}
          style={{ marginStart: 5 }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "95%",
    height: 45,
    borderRadius: 10,
    borderColor: colors.platinum,
    borderWidth: 2,
    backgroundColor: colors.white,
    marginTop: 10,
    marginBottom: 5,
    flexDirection: "row",
    alignSelf: "center",
    alignItems: "center",
  },

  searchField: {
    width: "75%",
    height: "100%",
    paddingStart: 10,
    fontSize: 14,
  },
});
