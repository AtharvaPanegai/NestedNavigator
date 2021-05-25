/** @format */

import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./screens/HomeScreen";
import ProfileScreen from "./screens/ProfileScreen";
import Screen1 from "./screens/Screen1";
import screen2 from "./screens/screen2";
import PlayGround from "./screens/PlayGround";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

// Must start with Capital Letter

const AppStack = () => {
  return (
    <Stack.Navigator initialRouteName = "Home">
      <Stack.Screen name='Home' component={HomeScreen} />
      <Stack.Screen name='Profile' component={ProfileScreen} />
      <Stack.Screen name = "PlayGround" component = {PlayGround} />
      <Stack.Screen name='AppTab' component={AppTab} />
      {/* <Stack.Screen name='ScreenOne' component={Screen1} />
      <Stack.Screen name='ScreenTwo' component={screen2} /> */}
    </Stack.Navigator>
  );
};

const AppTab = () =>
{
  return(
    <Tab.Navigator>
      {/* <Tab.Screen name = "AppStack" component = {AppStack} /> */}
      <Tab.Screen name = "ScreenOne" component = {Screen1} />
      <Tab.Screen name = "ScreenTwo" component = {screen2} />
    </Tab.Navigator>
  )  
}

// To nest the Tab Navigator inside the stack navigator insert the apptab in the stack navigator
export default function App() {
  return (
  <NavigationContainer>
    <AppStack />
  </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
