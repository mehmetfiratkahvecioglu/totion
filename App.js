import * as React from "react";
import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Todos from "./src/screens/Todos";
import TodoDetail from "./src/screens/TodoDetail";
import Weathers from "./src/screens/Weathers";
import WeatherDetail from "./src/screens/WeatherDetail";
import Map from "./src/screens/Map";
const Stack = createNativeStackNavigator();

const TodosStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "black",
        },
        headerTintColor: "white",
      }}
    >
      <Stack.Screen name="Todos" component={Todos} />
      <Stack.Screen name="TodoDetail" component={TodoDetail} />
    </Stack.Navigator>
  );
};

const WeatherStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "black",
        },
        headerTintColor: "white",
      }}
    >
      <Stack.Screen name="Weathers" component={Weathers} />
      <Stack.Screen name="WeatherDetail" component={WeatherDetail} />
    </Stack.Navigator>
  );
};

const MapStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "black",
        },
        headerTintColor: "white",
      }}
    >
      <Stack.Screen name="Map" component={Map} />
    </Stack.Navigator>
  );
};
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: {
            backgroundColor: "black",
            borderTopWidth: 0,
            elevation: 0,
          },
        }}
      >
        <Tab.Screen
          name="TodosStack"
          component={TodosStack}
          options={{
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="WeatherStack"
          component={WeatherStack}
          options={{
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="MapStack"
          component={MapStack}
          options={{
            headerShown: false,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
