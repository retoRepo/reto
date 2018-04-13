import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';
import { StackNavigator } from 'react-navigation';



export default class Main extends React.Component {
  static navigationOptions = {
    headerLeft: null
  }
  render() {
    return (
      <View>
       <Text>Welcome to the main page!!!</Text>
      </View>
    );
  }
}

