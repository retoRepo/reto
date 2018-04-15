import React, { Component } from 'react';
import {
  StyleSheet,
  TouchableHighlight,
  Text,
  View,
  Image
} from 'react-native';

import styles from './styles';

class ScreenTwo extends Component {
  static navigationOptions = {
    header : null,
    tabBarLabel: 'Create Game',
  }
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <TouchableHighlight
          onPress={() => navigate('ScreenOne')}
          style={[styles.button, {backgroundColor: '#C56EE0'}]}>
          <Text style={styles.buttonText}>Go To Screen One </Text>
        </TouchableHighlight>
      </View>
    );
  }
}

export default ScreenTwo;