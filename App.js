import React, { Component } from 'react';
import firebase from './firebase';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import Splash from './screens/Splash.js';
import Main from './screens/Main.js';

const Navigation = StackNavigator({
  Home : {
    screen : Splash
  },
  Main : {
    screen : Main
  }
})

export default Navigation;