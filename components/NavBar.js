import React from "react";
import { StyleSheet, Text, View } from "react-native";

const NavBar = () => {
  return (
    <View
      style={{
        marginHorizontal: 50,
        marginVertical: 50,
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Text>What's Brewing</Text>
      <Text>cal</Text>
      <Text>bell</Text>
      <Text>profile</Text>
    </View>
  );
};

export default NavBar;

const styles = StyleSheet.create({});
