/** @format */

import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={{ justifyContent: "center", alignItems: "center", flex: 1 }}>
      <Button
        title='Go to Google'
        onPress={() => {
          navigation.navigate("PlayGround");
        }}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
