import React from "react";
import { AppRegistry, StyleSheet, View } from "react-native";
import Landing from "./components/Landing";
import List from "./components/List";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
// import { createBottomTabNavigator } from "react-navigation-tabs";
import Home from "./components/MainHome";
import National from "./components/MainMenu";
import StateHome from "./components/StateHome";
import LocalHome from "./components/LocalHome";
import News from "./components/News";
import MainMenu from "./components/MainMenu";
import NationalMenu from "./components/NationalMenu";
import PresCandidates from "./components/PresCandidates";
import CandidateScreen from "./components/CandidateScreen";
import TopNews from "./components/TopStories";
import TopStories from "./components/TopStories";
import BarChart from "./components/PieChart";
import BernieScreen from "./components/BernieScreen";

import {
  IconRegistry,
  ApplicationProvider,
  Layout,
  Text
} from "@ui-kitten/components";
import { EvaIconsPack } from "@ui-kitten/eva-icons";
import { mapping, light as lightTheme } from "@eva-design/eva";
import Stories from "./components/Stories";
const Stack = createStackNavigator();

export default function App({ navigation }) {
  return (
    <React.Fragment>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider mapping={mapping} theme={lightTheme}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="Landing"
              component={Landing}
              options={{ title: "Landing" }}
            />
            <Stack.Screen name="News" component={News} />
            <Stack.Screen name="National" component={National} />
            <Stack.Screen name="State" component={StateHome} />
            <Stack.Screen name="Local" component={LocalHome} />
            <Stack.Screen name="Stories" component={Stories} />
            <Stack.Screen name="MainMenu" component={MainMenu} />
            <Stack.Screen name="NationalMenu" component={NationalMenu} />
            <Stack.Screen name="Candidate Screen" component={CandidateScreen} />
            <Stack.Screen
              name="Presidential Candidates"
              component={PresCandidates}
            />
            <Stack.Screen name="Top News" component={TopNews} />
            <Stack.Screen name="Top Stories" component={TopStories} />
            <Stack.Screen name="Bar Chart" component={BarChart} />
            <Stack.Screen name="Bernie Home" component={BernieScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </ApplicationProvider>
    </React.Fragment>
  );
}
