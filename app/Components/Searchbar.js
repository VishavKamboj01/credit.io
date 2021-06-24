import React from "react";
import { StyleSheet, View, TextInput } from "react-native";
import { colors } from "../config/colors";

export default function Searchbar() {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchField}
        selectionColor={colors.red}
      ></TextInput>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "95%",
    height: 45,
    elevation: 20,
    borderRadius: 10,
    backgroundColor: colors.white,
    marginTop: 10,
    marginBottom: 10,
    alignSelf: "center",
    justifyContent: "center",
  },

  searchField: {
    width: "80%",
    height: "100%",
  },
});
