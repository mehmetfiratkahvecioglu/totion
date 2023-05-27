import {
  View,
  Text,
  ImageBackground,
  Image,
  TextInput,
  TouchableOpacity,
  FlatList,
} from "react-native";
import React, { useState } from "react";
import Cards from "./Cards";

export default function Wheathers({ navigation }) {
  const [city, setCity] = useState("");

  const cities = [
    {
      name: "Manisa",
      image: require("../../assets/images/Manisa.jpeg"),
    },
    {
      name: "İzmir",
      image: require("../../assets/images/izmir.jpg"),
    },
    {
      name: "New York",
      image: require("../../assets/images/image4.jpg"),
    },
    {
      name: "London",
      image: require("../../assets/images/image5.jpg"),
    },
    {
      name: "San Francisco",
      image: require("../../assets/images/image6.jpg"),
    },
    {
      name: "New Jersey",
      image: require("../../assets/images/image7.jpg"),
    },
  ];

  return (
    <ImageBackground
      source={require("../../assets/images/image2.jpg")}
      style={{ flex: 1 }}
      imageStyle={{ opacity: 1, backgroundColor: "black" }}
    >
      <View
        style={{
          paddingVertical: 20,
          paddingHorizontal: 10,
        }}
      >
        <View style={{ paddingHorizontal: 20, marginTop: 100 }}>
          <Text style={{ fontSize: 40, color: "white" }}>Hello there.</Text>
          <Text style={{ color: "white", fontSize: 22, fontWeight: "bold" }}>
            Search the city by the name
          </Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              borderRadius: 50,
              borderWidth: 1,
              borderColor: "white",
              marginTop: 16,
              paddingHorizontal: 10,
            }}
          >
            <TextInput
              value={city}
              onChangeText={(val) => setCity(val)}
              placeholder="Search City"
              placeholderTextColor="white"
              style={{ paddingHorizontal: 10, color: "white", fontSize: 16 }}
            />
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("WeatherDetail", { name: city })
              }
            >
              <View
                style={{
                  height: 22,
                  justifyContent: "center",
                  backgroundColor: "white",
                  borderRadius: 50,
                  margin: 5,
                  paddingHorizontal: 10,
                }}
              >
                <Text style={{ color: "darkblue" }}>Detail</Text>
              </View>
              {/*<Icon name="search" size={22} color="white" />*/}
            </TouchableOpacity>
          </View>

          <Text
            style={{
              color: "white",
              fontSize: 25,
              paddingHorizontal: 10,
              marginTop: 220,
              marginBottom: 20,
            }}
          >
            My Locations
          </Text>
          <FlatList
            horizontal
            data={cities}
            renderItem={({ item }) => (
              <Cards
                name={item.name}
                image={item.image}
                navigation={navigation}
              />
            )}
          />
        </View>
      </View>
    </ImageBackground>
  );
}
