import React, { useState } from "react";
import { FlatList } from "react-native";

import AppListItem from "./AppListItem";

export default function AppList({
  customers,
  onListItemPressed,
  onListEndReached,
  onScrolling,
}) {
  const endReachedThreshold =
    customers.length / (customers.length * (customers.length * 2));
  return (
    <FlatList
      onEndReached={onListEndReached}
      onEndReachedThreshold={endReachedThreshold}
      onScroll={(e) => onScrolling(e.nativeEvent.contentOffset.y)}
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
