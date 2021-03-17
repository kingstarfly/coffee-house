import React from "react";
import { Image, StyleSheet } from "react-native";

const Logo = () => (
  <Image source={require("../assets/logo_nowords.png")} style={styles.image} />
);

const styles = StyleSheet.create({
  image: {
    width: 110,
    height: 110,
    marginBottom: 8,
  },
});

export default Logo;
