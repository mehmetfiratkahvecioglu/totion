import { SafeAreaView, Text, StyleSheet } from "react-native";
import React from "react";

const TodoDetail = ({ navigation, route }) => {
  const { todo } = route.params;
  return (
    <SafeAreaView style={styles.container}>
      <Text>{todo.text}</Text>
    </SafeAreaView>
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
