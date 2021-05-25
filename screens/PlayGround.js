/** @format */

import React from "react";
import { StyleSheet, Text, View,TouchableOpacity } from "react-native";
import { WebView } from "react-native-webview";

const PlayGround = () => {
  return (
      <View style = {{flex : 1,}}>
    <WebView 
        source = {{uri : "https://gist.github.com/AtharvaPanegai/7cf4b5caca9edbe2e5f36a70476911ce"}}
    />
    <TouchableOpacity style = {{width : "100%",justifyContent : "flex-end",alignItems : "center",backgroundColor : "#0D0D0D" }}>
        <Text style = {{fontSize : 18,paddingVertical : 20,color : "white"}}>Open in Browser</Text>
    </TouchableOpacity>
    </View>

  );
};

export default PlayGround;

const styles = StyleSheet.create({});
