import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Header} from 'react-native-elements';

export default class ReadScreen extends React.Component{
    render(){
        return(
            <View style={{backgroundColor: 'blue'}}>
                <Header
                 backgroundColor = {"red"}
                 centerComponent = {{
                     text: "WELCME TO STORY HUB"
                 }}
                />
                <Text style={{fontSize: 50,fontWeight: 'bold',alignItems: 'center',justifyContent: 'center'}}>
                 READING SCREEN
                </Text>
            </View>
        )
    }
}