import React, { Component } from 'react';
import firebase from './firebase';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';


function writehighscore(userId, score) {
  firebase.database().ref('users/' + userId).set({
    highscore: score,
  });
}

// writehighscore('haq',90909);

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      switch: false,
      notification: false,
      slider: 0,
    };
  }

  componentDidMount(){

    
    firebase.database().ref('database/').on('value', snapshot => {
      // fullDB = snapshot.val();
      // console.log(snapshot.val())
      
      // fullDB = snapshot.val();
      const fullDB = Object.assign({}, snapshot.val());
      const notificationObj = Object.values(fullDB["notification"]);
      console.log(notificationObj)
    });



  }

  render() {
    return (
      <View style={styles.container}>
      <View style={[styles.boxContainer, styles.boxOne]}>
      <View style={styles.container}>
      <Image
      style={{ height: 140, width: 200, resizeMode: 'contain' }} 
      source={require('./img/reto-logo.png')}
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
