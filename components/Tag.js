import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { useTheme } from "react-native-elements";

export default function Tag({ content }) {
  const { theme } = useTheme();
  return (
    <View
      style={{
        borderWidth: 1,
        borderColor: theme.colors.primary,
        marginRight: 15,
        paddingHorizontal: 10,
        paddingVertical: 3,
        borderRadius: 10,
      }}
    >
      <Text
        style={{
          textAlign: "center",
          color: theme.colors.primary,
        }}
      >
        {content}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({});
