import React from "react";
import { AppRegistry, StyleSheet, Text, View } from "react-native";
import Landing from "./components/Landing";
import List from "./components/List";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./components/MainHome";
import FederalHome from "./components/FederalHome";
import StateHome from "./components/StateHome";
import LocalHome from "./components/LocalHome";

const Stack = createStackNavigator();

export default function App({ navigation }) {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Landing"
          component={Landing}
          options={{ title: "Landing" }}
        />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Federal" component={FederalHome} />
        <Stack.Screen name="State" component={StateHome} />
        <Stack.Screen name="Local" component={LocalHome} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
