import React from "react";
import {
  StyleSheet,
  View,
  Image,
  Text,
  TouchableNativeFeedback,
} from "react-native";

import { colors } from "../config/colors";
import customerImage from "../assets/customerImage.png";

export default function AppListItem({
  image = customerImage,
  name,
  subTitle,
  payment,
  paymentStatus,
  onItemPressed,
}) {
  return (
    <TouchableNativeFeedback onPress={onItemPressed}>
      <View style={styles.container}>
        <Image style={styles.customerImage} source={image} />
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{name}</Text>
          <Text style={styles.subTitle}>{subTitle}</Text>
        </View>
        <View style={styles.paymentContainer}>
          <View>
            <Text
              style={
                paymentStatus === "Due"
                  ? styles.paymentDue
                  : styles.paymentAdvance
              }
            >
              {payment}
            </Text>
            <Text style={styles.paymentStatus}>{paymentStatus}</Text>
          </View>
        </View>
      </View>
    </TouchableNativeFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "100%",
    backgroundColor: colors.white,
    height: 65,
    alignItems: "center",
  },

  customerImage: {
    width: 50,
    height: 50,
    marginStart: 10,
  },

  titleContainer: {
    marginStart: 15,
  },

  title: {
    color: colors.black,
    fontSize: 16,
  },

  subTitle: {
    color: colors.lightBlack,
    fontSize: 13,
  },

  paymentContainer: {
    flexGrow: 1,
    flexDirection: "row",
    justifyContent: "flex-end",
    marginRight: 10,
  },

  paymentDue: {
    color: "red",
  },

  paymentAdvance: {
    color: "green",
  },

  paymentStatus: {
    color: colors.lightBlack,
  },
});
