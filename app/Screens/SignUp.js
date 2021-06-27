import React, { useState } from "react";
import {
  StyleSheet,
  ImageBackground,
  View,
  Image,
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
    // navigation.navigate("TabNavigation", { name: "TabNavigation" });
  };

  return (
    <ScrollView>
      <ImageBackground style={styles.background} source={loginBackground}>
        <View style={styles.backgroundColor}>
          <View style={styles.container}>
            <Image source={logoIcon} style={styles.logo} />
            <AppInputField
              icon="email"
              placeholder="Email Address"
              onChangeText={(text) => setEmail(text)}
            />
            <AppInputField
              icon="account"
              placeholder="Username"
              onChangeText={(text) => setUsername(text)}
            />
            <AppInputField
              icon="lock"
              placeholder="Password"
              onChangeText={(text) => setPassword(text)}
              secureTextEntry={true}
            />
            <AppInputField
              icon="lock"
              placeholder="Confirm Password"
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
    </ScrollView>
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
  },

  container: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    marginTop: 100,
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
    marginBottom: "50%",
  },
});
