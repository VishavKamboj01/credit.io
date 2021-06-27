import React, { useEffect } from "react";
import { createStackNavigator } from "@react-navigation/stack";

import CustomerTransactions from "../Screens/CustomerTransactions";
import Home from "../Screens/Home";
import { colors } from "../config/colors";

const Stack = createStackNavigator();

export default function HomeNavigation({ route }) {
  useEffect(() => {
    if (route.params?.customer) {
      // Customer updated, do something with `route.params.customer`
      // Send the customer to the server
      console.log(route.params.customer);
    }
  }, [route.params?.customer]);

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        options={({ route }) => ({ headerShown: false })}
      >
        {(props) => <Home {...props} customer={route.params?.customer} />}
      </Stack.Screen>
      <Stack.Screen
        options={({ route }) => ({
          title: route.params.name,
          headerStyle: { backgroundColor: colors.red },
          headerTintColor: colors.white,
        })}
        name="CustomerTransactions"
        component={CustomerTransactions}
      />
    </Stack.Navigator>
  );
}
