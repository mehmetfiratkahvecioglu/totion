import { View, Text, ImageBackground, TouchableOpacity } from "react-native";
import React from "react";
import { deviceHeight, deviceWidth } from "./Dimensions";

export default function Cards({ name, image, navigation }) {
  return (
    <TouchableOpacity
      style={{ marginHorizontal: 10 }}
      onPress={() => navigation.navigate("WeatherDetail", { name })}
    >
      <ImageBackground
        source={image}
        style={{ height: deviceHeight / 5, width: deviceWidth / 2 - 50 }}
        imageStyle={{ borderRadius: 16 }}
      />
      <View style={{ position: "absolute", height: "100%", width: "100%" }}>
        <View
          style={{
            backgroundColor: "rgba(255,255,255,0.5)",
            borderRadius: 16,
            borderBottomLeftRadius: 0,
            borderBottomRightRadius: 0,
          }}
        >
          <Text
            style={{
              fontSize: 28,
              textAlign: "center",
              textAlignVertical: "center",
              color: "black",
            }}
          >
            {name}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}
