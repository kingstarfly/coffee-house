import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Icon, useTheme } from "react-native-elements";
import Tag from "./Tag";

export default function Room({ room }) {
  const { theme } = useTheme();
  const {
    id,
    company,
    title,
    tags,
    moderators,
    numListeners,
    numSpeakers,
  } = room;
  return (
    <View
      style={{
        paddingVertical: 20,
        paddingHorizontal: 30,
        marginVertical: 10,
        marginHorizontal: 30,
        borderRadius: 30,
        backgroundColor: theme.colors.background,
        elevation: 5,
      }}
    >
      <Text
        style={{
          color: theme.colors.secondary,
        }}
      >
        {company}
      </Text>
      <Text
        style={{
          fontSize: 20,
          fontWeight: "700",
        }}
      >
        {title}
      </Text>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "flex-start",
          marginTop: 5,
        }}
      >
        {tags.map((mod, ind) => (
          <Tag key={ind} content={mod} />
        ))}
      </View>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "flex-start",
          marginVertical: 20,
        }}
      >
        <View></View>
        <View>
          {/* Todo add pictures */}
          <Text>Pictures</Text>
        </View>
        <View
          style={{
            flexDirection: "column",
            marginLeft: 40,
          }}
        >
          {moderators.map((mod, ind) => (
            <Text style={{ marginBottom: 5, fontSize: 16 }}>{mod}</Text>
          ))}
        </View>
      </View>

      <View style={{ flexDirection: "row", marginLeft: 100 }}>
        <View style={{ flexDirection: "row", marginRight: 15 }}>
          <Icon
            name="user"
            type="font-awesome"
            color={theme.colors.secondary}
            size={20}
          />
          <Text style={{ marginLeft: 5, fontSize: 14 }}>{numListeners}</Text>
        </View>
        <View style={{ flexDirection: "row", marginRight: 15 }}>
          <Text style={{ color: theme.colors.secondary }}>/</Text>
        </View>

        <View style={{ flexDirection: "row" }}>
          <Icon
            name="microphone"
            type="font-awesome"
            color={theme.colors.secondary}
            size={20}
          />
          <Text style={{ marginLeft: 5, fontSize: 14 }}>{numListeners}</Text>
        </View>
      </View>

      {/* <Text> {JSON.stringify(room, null, 2)}</Text> */}
    </View>
  );
}

const styles = StyleSheet.create({});
