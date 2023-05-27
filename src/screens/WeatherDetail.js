import { View, Text } from "react-native";
import React, { useEffect } from "react";
import { API_KEY } from "../Constants";
const WeatherDetail = ({ navigation }) => {
  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${"Antalya"}&appid=${API_KEY}`
    )
      .then((res) => res.json())
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }, []);

  return (
    <View>
      <Text>Weathers</Text>
    </View>
  );
};

export default WeatherDetail;
