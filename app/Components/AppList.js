import React, { useState } from "react";
import { FlatList, View } from "react-native";
import { colors } from "../config/colors";

import AppListItem from "./AppListItem";
import AppListItemSeperator from "./AppListItemSeperator";

export default function AppList({ items, onListItemPressed }) {
  return (
    <FlatList
      data={items}
      renderItem={({ item }) => {
        return (
          <AppListItem
            key={item.id}
            name={item.name}
            subTitle={item.recentActivity}
            payment={item.payment}
            paymentStatus={item.paymentStatus}
            onItemPressed={() => onListItemPressed(item)}
          />
        );
      }}
      ItemSeparatorComponent={() => <AppListItemSeperator />}
      keyExtractor={(item) => item.id}
    />
  );
}
