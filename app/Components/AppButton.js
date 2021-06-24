import React from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";

export default function AppButton({
  title,
  onPress,
  color = "orange",
  style,
  textColor = "white",
}) {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: color }, style]}
      onPress={onPress}
    >
      <Text style={[styles.text, { color: textColor }]}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    width: "100%",
    height: 50,
    backgroundColor: "orange",
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
  },

  text: {
    color: "white",
    textTransform: "uppercase",
  },
});
