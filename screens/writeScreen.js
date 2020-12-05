import React from 'react';
import { StyleSheet, Text, View, TextInput} from 'react-native';
import {Header} from 'react-native-elements';

export default class WriteScreen extends React.Component{
    constructor(){
        super();
        this.state = {
            TitleText: "WRITE THE TITLE FOR STORY",
            AuthorText: "NAME OF THE AUTHOR",
            StoryText: "WRITE THE STORY HERE"
        }
    }
    render(){
        return(
            <View  style={{backgroundColor: 'blue' , height: 1000}}>
                <Header
                 backgroundColor = {"red"}
                 centerComponent = {{
                     text: "WELCOME TO STORY HUB 😀😀😀"
                 }}
                />

                <TextInput
                style={style.inputStyle}
                 onChangeText={(text)=>{
                     this.setState({
                         TitleText: text
                    })
                  }}
                  value={this.state.TitleText}/>

                  <TextInput
                      style={style.inputStyle}
                      onChangeText={(text)=>{
                          this.setState({
                              AuthorText: text
                          })
                      }}
                      value={this.state.AuthorText}/>   

                  <TextInput
                      style={{width:'80%', marginTop: 40, alignSelf: 'center', height: 200, textAlign: 'center', borderWidth: 2, borderRadius:25,backgroundColor: 'yellow'}}
                      onChangeText={(text)=>{
                          this.setState({
                              StoryText: text
                          })
                      }}
                      multiline={true}
                      value={this.state.StoryText}/>
            </View>
        )
     }
  }

  const style = StyleSheet.create({
    inputStyle: {
        marginTop: 20,
        width: '80%',
        alignSelf: 'center',
        height: 40,
        textAlign: 'center',
        borderWidth: 2,
        borderRadius: 50,
backgroundColor: 'yellow'
      }
  })