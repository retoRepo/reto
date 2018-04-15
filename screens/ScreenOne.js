import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    TouchableHighlight,
    View,
    Image
} from 'react-native';


class ScreenOne extends Component {
  static navigationOptions = {
    title: 'Welcome',
    tabBarLabel: 'Join Game',
    header : null,
  }
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={[styles.boxContainer, styles.boxOne]}>
          <TouchableHighlight
            onPress={() => navigate('ScreenTwo')}
            style={[styles.button, {backgroundColor: '#7567B1'}]}>
            <Text style={styles.buttonText}> Go To Screen Two </Text>
        </TouchableHighlight>
        </View>
      
    );
  }
}

export default ScreenOne;

const styles = StyleSheet.create({
    container: {
      flex: 1, // 1:1 ratio so takes all the space available
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#fffdfc',
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