import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'

const Screen1 = ({navigation}) => {
    return (
        <View style = {{flex : 1,justifyContent : "center",alignItems : "center"}}>
            <Button title = "Go to Home Screen" onPress = {() => {navigation.navigate("Home")}} />
        </View>
    )
}

export default Screen1

const styles = StyleSheet.create({})
