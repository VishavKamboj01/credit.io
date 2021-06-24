import React, { useState } from "react";
import {
  StyleSheet,
  ImageBackground,
  View,
  Image,
  TextInput,
  Text,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from "react-native";

import AppInputField from "../Components/AppInputField";
import AppButton from "../Components/AppButton";

import loginBackground from "../assets/loginBackground.jpg";
import logoIcon from "../assets/logo_red.png";
import { colors } from "../config/colors";

export default function Login({ navigation }) {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSignUpPress = () => {
    //Save Details in the database and login the user
    navigation.navigate("Home", { name: "Home" });
  };

  return (
    <KeyboardAvoidingView style={{ width: "100%", height: "100%" }}>
      <ImageBackground style={styles.background} source={loginBackground}>
        <View style={styles.backgroundColor}>
          <View style={styles.container}>
            <Image source={logoIcon} style={styles.logo} />
            <AppInputField
              title="EMAIL ADDRESS"
              onChangeText={(text) => setEmail(text)}
            />
            <AppInputField
              title="USERNAME"
              onChangeText={(text) => setUsername(text)}
            />
            <AppInputField
              title="PASSWORD"
              onChangeText={(text) => setPassword(text)}
              secureTextEntry={true}
            />
            <AppInputField
              title="CONFIRM PASSWORD"
              onChangeText={(text) => setConfirmPassword(text)}
              secureTextEntry={true}
            />
            <AppButton
              style={styles.signUpButton}
              color={colors.red}
              title="Sign Up"
              onPress={handleSignUpPress}
            />
          </View>
        </View>
      </ImageBackground>
    </KeyboardAvoidingView>
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
    marginBottom: 60,
  },

  signUpButton: {
    width: "85%",
    marginTop: 40,
    elevation: 10,
  },
});
