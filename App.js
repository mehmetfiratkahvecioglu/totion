import * as React from "react";
import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Todos from "./src/screens/Todos";
import TodoDetail from "./src/screens/TodoDetail";
const Stack = createNativeStackNavigator();

const TodosStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Todos" component={Todos} />
      <Stack.Screen name="TodoDetail" component={TodoDetail} />
    </Stack.Navigator>
  );
};

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Settings!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="TodosStack"
          component={TodosStack}
          options={{
            headerShown: false,
          }}
        />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
