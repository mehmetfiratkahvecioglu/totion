import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  FlatList,
  StyleSheet,
  Pressable,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Todos = ({ navigation }) => {
  const [todoText, setTodoText] = useState("");
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    loadTodos();
  }, []);

  const loadTodos = async () => {
    try {
      const savedTodos = await AsyncStorage.getItem("todos");
      if (savedTodos !== null) {
        setTodos(JSON.parse(savedTodos));
      }
    } catch (error) {
      console.log(error);
    }
  };
  const saveTodos = async (todosToSave) => {
    try {
      const todosJSON = JSON.stringify(todosToSave);
      await AsyncStorage.setItem("todos", todosJSON);
    } catch (error) {
      console.log(error);
    }
  };

  const addTodo = () => {
    if (todoText) {
      const newTodo = { id: Date.now(), text: todoText };
      const updatedTodos = [...todos, newTodo];
      setTodos(updatedTodos);
      saveTodos(updatedTodos);
      setTodoText("");
    }
  };

  const deleteTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
    saveTodos(updatedTodos);
  };

  const renderItem = ({ item }) => {
    return (
      <Pressable
        style={styles.item}
        onPress={() => {
          navigation.navigate("TodoDetail", { todo: item });
        }}
      >
        <Text>{item.text}</Text>
        <Button title="Delete" onPress={() => deleteTodo(item.id)} />
      </Pressable>
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
