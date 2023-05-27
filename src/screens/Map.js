import React from "react";
import MapView from "react-native-maps";
import { StyleSheet, View } from "react-native";
import { StatusBar } from "expo-status-bar";
export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <MapView style={styles.map} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: "100%",
    height: "100%",
  },
});
