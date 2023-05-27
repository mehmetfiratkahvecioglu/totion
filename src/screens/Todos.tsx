import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  FlatList,
  StyleSheet,
} from "react-native";

const Todos = () => {
  const [todoText, setTodoText] = useState("");
  const [todos, setTodos] = useState([]);

  const addTodo = () => {
    if (todoText) {
      setTodos([...todos, { id: Date.now(), text: todoText }]);
      setTodoText("");
    }
  };

  const deleteTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  const renderItem = ({ item }) => {
    return (
      <View style={styles.item}>
        <Text>{item.text}</Text>
        <Button title="Delete" onPress={() => deleteTodo(item.id)} />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={todos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
      />
      <TextInput
        placeholder="Enter todo"
        value={todoText}
        onChangeText={(text) => setTodoText(text)}
        style={styles.input}
      />
      <Button title="Add" onPress={addTodo} />
    </View>
  );
};

export default Todos;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    padding: 20,
    justifyContent: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 10,
    fontSize: 18,
    borderRadius: 6,
    marginTop: 10,
  },
  item: {
    padding: 10,
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    margin: 10,
  },
});
