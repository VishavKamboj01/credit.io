import React, { useState } from "react";
import { FlatList } from "react-native";

import AppListItem from "./AppListItem";

export default function AppList({ customers, onListItemPressed }) {
  const handleEndReached = () => {
    console.log("End Reached");
  };

  return (
    <FlatList
      onEndReached={handleEndReached}
      onEndReachedThreshold={0.05}
      data={customers}
      renderItem={({ item }) => {
        return (
          <AppListItem
            key={item.id}
            name={item.name}
            recentActivity={item.recentActivity}
            payment={item.payment}
            paymentStatus={item.paymentStatus}
            onItemPressed={() => onListItemPressed(item.id)}
          />
        );
      }}
      keyExtractor={(item) => item.id}
    />
  );
}
