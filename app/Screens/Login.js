import React, { useState } from "react";
import {
  StyleSheet,
  ImageBackground,
  View,
  Image,
  TextInput,
  Text,
} from "react-native";

import AppInputField from "../Components/AppInputField";
import AppButton from "../Components/AppButton";

import loginBackground from "../assets/loginBackground.jpg";
import logoIcon from "../assets/logo_red.png";
import { colors } from "../config/colors";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <ImageBackground style={styles.background} source={loginBackground}>
      <View style={styles.backgroundColor}>
        <View style={styles.container}>
          <Image source={logoIcon} style={styles.logo} />
          <AppInputField
            title="USERNAME"
            onChangeText={(text) => setUsername(text)}
          />
          <AppInputField
            title="PASSWORD"
            onChangeText={(text) => setPassword(text)}
            secureTextEntry={true}
          />
          <Text style={styles.forgetPassword}>Forget Password?</Text>
          <AppButton
            style={styles.loginButton}
            color={colors.red}
            title="LOGIN"
          />
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    width: "100%",
    height: "100%",
  },

  backgroundColor: {
    flex: 1,
    backgroundColor: "rgba(255, 255, 255,0.8)",
    justifyContent: "center",
    alignItems: "center",
  },

  container: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },

  logo: {
    width: 80,
    height: 80,
    marginBottom: 70,
  },

  forgetPassword: {
    color: colors.lightBlack,
    textDecorationStyle: "solid",
    textDecorationLine: "underline",
    marginTop: 15,
    alignSelf: "flex-end",
    marginRight: 35,
  },

  loginButton: {
    width: "85%",
    marginTop: 30,
    elevation: 10,
  },
});
