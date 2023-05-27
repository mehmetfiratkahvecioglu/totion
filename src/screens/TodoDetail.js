import { View, Text, StyleSheet, ImageBackground } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
const TodoDetail = ({ navigation, route }) => {
  const { todo } = route.params;
  return (
    <ImageBackground
      source={require("../../assets/images/image1.jpg")}
      style={styles.container}
    >
      <StatusBar style="light" />
      <View
        style={{
          margin: 20,
          padding: 20,
          backgroundColor: "rgba(0,0,0,0.7)",
          borderRadius: 20,
          minHeight: 200,
          width: "90%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            color: "white",
            fontSize: 20,
          }}
        >
          {todo.text}
        </Text>
      </View>
    </ImageBackground>
  );
};

export default TodoDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
});
