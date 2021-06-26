import React from "react";
import { StyleSheet, View } from "react-native";
import { colors } from "../config/colors";

export default function AppListItemSeperator() {
  return (
    <View style={styles.container}>
      <View style={styles.seperatorLine}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "flex-end",
  },

  seperatorLine: {
    width: "85%",
    height: 1,
    backgroundColor: colors.lightWhite,
  },
});
