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
    header : null
  }
  componentWillMount(){
    setTimeout(()=>{
      this.props.navigation.navigate('Main');
    },2500);
  };
  render() {
    return (
      <View style={styles.container}>
      <View style={[styles.boxContainer, styles.boxOne]}>
      <View style={styles.container}>
        <Image
        style={{ height: 140, width: 200, resizeMode: 'contain' }} 
        source={require('../img/reto-logo.png')}
          />
          </View>
          </View>
          <View style={[styles.boxContainer, styles.boxTwo]}>
          <Text style={styles.welcome}>
            Welcome to Reto!
          </Text>
          <Text style={styles.instructions}>
            A sports court booking app,{'\n'}
            for all
          </Text>
        </View>
        <View style={[styles.boxContainer, styles.boxThree]}>
        </View>
        </View>
      );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // 1:1 ratio so takes all the space available
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#DC934C',
    // backgroundColor: '#F17F42',
    // backgroundColor: '#CE6D39',
    flexDirection: 'column',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  boxContainer: {
    flex:1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  boxOne: {
    flex:2,
  },
  boxTwo: {
    flex:1,
  },
  boxThree: {
    flex:1,
  }
});

AppRegistry.registerComponent('flexbasics', () => flexbasics);
