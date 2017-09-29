import React, {Component} from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';
import Pin from './assets/component/Pin'
export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Pin/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

AppRegistry.registerComponent('FlexLayout', () => 'App')