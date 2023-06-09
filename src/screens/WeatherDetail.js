import { View, ImageBackground, Image, Text } from "react-native";
import React, { useEffect, useState } from "react";
import { deviceHeight, deviceWidth } from "./Dimensions";
import { API_KEY } from "../Constants";
import { StatusBar } from "expo-status-bar";
export default function Details(props) {
  const [data, setData] = useState();
  const { name } = props.route.params;

  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${API_KEY}`
    )
      .then((res) => res.json())
      .then((res) => {
        setData(res);
        console.log(res);
      })
      .catch((err) => console.log(err));
  }, []);

  const Data = ({ title, value }) => (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Text style={{ color: "gray", fontSize: 22 }}>{title}</Text>
      <Text style={{ color: "white", fontSize: 22 }}>{value}</Text>
    </View>
  );

  return (
    <ImageBackground
      source={require("../../assets/images/image1.jpg")}
      style={{
        height: deviceHeight,
        width: deviceWidth,
        justifyContent: "center",
        alignItems: "center",
      }}
      imageStyle={{ opacity: 1, backgroundColor: "black" }}
    >
      <StatusBar style="light" />
      {data ? (
        <View
          style={{
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "rgba(0,0,0,0.7)",
            marginBottom: 200,
            borderRadius: 20,
            padding: 20,
          }}
        >
          <View>
            <Text style={{ color: "white", fontSize: 40 }}>{name}</Text>
            <Text style={{ fontSize: 22, color: "white", textAlign: "center" }}>
              {data["weather"][0]["main"]}
            </Text>
          </View>

          <Text style={{ color: "white", fontSize: 64 }}>
            {(data["main"]["temp"] - 273).toFixed(2)}&deg; C
          </Text>

          <View>
            <Text style={{ color: "white", fontSize: 22, marginBottom: 16 }}>
              Weather Details
            </Text>
            <View style={{ width: deviceWidth - 60 }}>
              <Data value={data["wind"]["speed"]} title="Wind" />
              <Data value={data["main"]["pressure"]} title="Pressure" />
              <Data value={`${data["main"]["humidity"]}%`} title="Humidity" />
              <Data value={data["visibility"]} title="Visibility" />
            </View>
          </View>
        </View>
      ) : (
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Text style={{ color: "white" }}>Error try later.</Text>
        </View>
      )}
    </ImageBackground>
  );
}
