import React, {Component} from 'react';
import { AppRegistry, StyleSheet, Text, View,ScrollView } from 'react-native';
import Pin from './assets/component/Pin'
export default class App extends Component {
    constructor(props){
        super(props)
        this.state ={
            pin: { //object
                arrow:{
                    imageSource:require('./assets/img/Arrow.jpg'),
                    originalWidth: 736,
                    originalHeight: 900
                },
                flash:{
                    imageSource:require('./assets/img/rrPOdtg.jpg'),
                    originalWidth: 3014,
                    originalHeight: 1432
                }
            }
        }
    }

  render() {
    return (
      <ScrollView style={styles.container}>
        <Pin pinsource = {this.state.pin.arrow}/>
        <Pin pinsource = {this.state.pin.flash}/>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

  },
});

AppRegistry.registerComponent('FlexLayout', () => 'App')