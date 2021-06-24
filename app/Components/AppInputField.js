import React from "react";
import { StyleSheet, View, Text, TextInput } from "react-native";

import { colors } from "../config/colors";

export default function AppInputField({
  title,
  selectionColor = colors.lightBlack,
  onChangeText,
  value,
  placeholder,
  keyboardType,
  ...props
}) {
  return (
    <View style={styles.inputContainer}>
      <Text style={styles.inputFeildTitle}>{title}</Text>
      <View style={styles.inputFeildContainer}>
        <TextInput
          style={styles.inputField}
          onChangeText={onChangeText}
          selectionColor={selectionColor}
          value={value}
          placeholder={placeholder}
          keyboardType={keyboardType}
          {...props}
        ></TextInput>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    width: "85%",
    alignItems: "center",
  },

  inputFeildContainer: {
    width: "100%",
    backgroundColor: colors.silver,
    borderRadius: 25,
    elevation: 2,
  },

  inputFeildTitle: {
    color: colors.red,
    alignSelf: "flex-start",
    marginBottom: 10,
    marginTop: 20,
  },

  inputField: {
    width: "100%",
    height: 50,
    marginStart: 15,
    color: colors.lightBlack,
  },
});
