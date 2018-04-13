import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';
import { StackNavigator } from 'react-navigation';



export default class Splash extends React.Component {

  static navigationOptions = {
    // header : null
  }
  componentWillMount(){
    setTimeout(()=>{
      this.props.navigation.navigate('Main');
    },2500);
  };
  render() {
    return (
      <View>
       <Text>Hello!!!</Text>
      </View>
    );
  }
}

