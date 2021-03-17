import React from "react";
import Background from "../components/Background";
import { Header, Text, Button } from "react-native-elements";
import { SafeAreaView } from "react-native-safe-area-context";

import { StyleSheet, View } from "react-native";
import NavBar from "../components/NavBar";
import { StatusBar } from "expo-status-bar";
import RoomList from "../components/RoomList";

import { data } from "../fake_data/data";
// import Logo from "../components/Logo";
// import Header from "../components/Header";
// import Paragraph from "../components/Paragraph";
// import Button from "../components/Button";

const Dashboard = ({ navigation }) => (
  <SafeAreaView>
    <StatusBar barStyle="dark-content" />
    <NavBar />

    <RoomList rooms={data} />
  </SafeAreaView>
);

export default Dashboard;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "flex-end",
    marginBottom: 24,
  },
});
