import React, { Component } from 'react';
import { TabNavigator } from 'react-navigation';

import ScreenOne from './ScreenOne';
import ScreenTwo from './ScreenTwo';

import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';
import { StackNavigator } from 'react-navigation';

const MainPage = TabNavigator({
  ScreenOne: { screen: ScreenOne },
  ScreenTwo: { screen: ScreenTwo }
}, {
  tabBarOptions: { 
    activeTintColor: '#fffdfc',
    labelStyle: {
      fontSize: 12,
      fontWeight: '100'
    },
    style:{
      backgroundColor: '#DC934C'
    }
  }
});

export default MainPage;
