import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import Room from "./Room";

export default function RoomList({ rooms, children }) {
  const renderItem = ({ item }) => {
    return <Room room={item} />;
  };
  return (
    <FlatList
      data={rooms}
      renderItem={renderItem}
      keyExtractor={(room) => {
        // console.log(room);
        return room.id;
      }}
    />
  );
}

const styles = StyleSheet.create({});
