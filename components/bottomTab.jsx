import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";

function getIconByIndex(index, isFocused) {
  switch (index) {
    case 0:
      return (
        <AntDesign
          name="home"
          size={24}
          color={isFocused ? "#ffffff" : "#222"}
        />
      );
    case 1:
      return null; // We'll handle the "+" button separately
    case 2:
      return (
        <AntDesign
          name="message1"
          size={24}
          color={isFocused ? "#ffffff" : "#222"}
        />
      );
    default:
      return (
        <AntDesign
          name="message1"
          size={24}
          color={isFocused ? "#ffffff" : "#222"}
        />
      );
  }
}

export default function BottomTab({ state, descriptors, navigation, insets }) {
  return (
    <View
      style={{
        flexDirection: "row",
        backgroundColor: "#fefefe",
        // justifyContent: "center",
      }}
    >
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          });
        };

        // Adjust the curvy designs here
        if (index === 0) {
          return (
            <TouchableOpacity
              key={index}
              onPress={onPress}
              onLongPress={onLongPress}
              style={{
                width: "10%",
                marginTop: 10,
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
                borderTopRightRadius: 70,
                paddingTop: 10,
                backgroundColor: "#007aff",
                paddingBottom: insets.bottom,
              }}
            >
              {getIconByIndex(index, isFocused)}
              <Text style={{ color: isFocused ? "#fff" : "#222" }}>
                {label}
              </Text>
            </TouchableOpacity>
          );
        } else if (index === 1) {
          return (
            <View
              key={index}
              style={{
                backgroundColor: "#007aff",
                position: "relative",
                top: 18,
              }}
            >
              <View
                style={{
                  backgroundColor: "#fefefe",
                  // backgroundColor: "#995aff",
                  zIndex: 2,
                  padding: 12,
                  paddingTop: 0,
                  paddingBottom: 0,
                  alignSelf: "flex-start",
                  borderBottomLeftRadius: 100,
                  borderBottomRightRadius: 100,
                  // marginBottom: insets.bottom,
                }}
              >
                <TouchableOpacity
                  onPress={onPress}
                  onLongPress={onLongPress}
                  style={{
                    position: "relative",
                    width: 75,
                    height: 50,
                    borderRadius: 100,
                    justifyContent: "center",
                    alignItems: "center",
                    zIndex: 1,
                  }}
                >
                  <MaterialIcons
                    name="category"
                    size={50}
                    color={isFocused ? "#007aff" : "#ccc"}
                    style={{
                      position: "absolute",
                      top: -35,
                      zIndex: 2,
                    }}
                  />
                </TouchableOpacity>
              </View>
            </View>
          );
        } else if (index === 2) {
          return (
            <TouchableOpacity
              key={index}
              onPress={onPress}
              onLongPress={onLongPress}
              style={{
                marginTop: 10,
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
                borderTopLeftRadius: 100,
                paddingTop: 10,
                backgroundColor: "#007aff",
                paddingBottom: insets.bottom,
              }}
            >
              {getIconByIndex(index, isFocused)}
              <Text style={{ color: isFocused ? "#fff" : "#222222" }}>
                {label}
              </Text>
            </TouchableOpacity>
          );
        }

        return null;
      })}
    </View>
  );
}
