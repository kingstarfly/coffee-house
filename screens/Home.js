import React from "react";
import Background from "../components/Background";
import { Header, Text, Button } from "react-native-elements";
// import Logo from "../components/Logo";
// import Header from "../components/Header";
// import Paragraph from "../components/Paragraph";
// import Button from "../components/Button";

const Dashboard = ({ navigation }) => (
  <Background>
    <Logo />
    <Header>Home Screen</Header>
    <Text>
      Your amazing app starts here. Open you favorite code editor and start
      editing this project.
    </Text>
    <Button
      mode="outlined"
      onPress={() =>
        navigation.reset({
          index: 0,
          routes: [{ name: "StartScreen" }],
        })
      }
    >
      Logout
    </Button>
  </Background>
);

export default Dashboard;
