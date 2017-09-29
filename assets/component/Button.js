import React, {Component} from 'react';
import {StyleSheet, Text, View } from 'react-native'
import {PinIcon} from '../util/icons'

export default class Button extends Component{
    render(){
        {/*need variables to adjust bgcolor weight and text color*/}
        let bgColor, textWeight, textColor

        if(this.props.red){
            bgColor="red"
            textColor="white"
        }else{
            bgColor="#cecece"
            textWeight="bold"
            textColor="black"
        }
        return(

            // inline styling for the button
            <View style = {[styles.PinButton, {backgroundColor: bgColor}]}>
                {/*Toggle icon on and off: if icon is true and the component exists, then the icon will pop up*/}
                {this.props.icon && <PinIcon/>}
                <Text style = {[styles.PinButtonText, {fontWeight:textWeight, color:textColor}]}>{this.props.text}</Text>
            </View>

        )
    }
}

const styles = StyleSheet.create({
    PinButton:{
        flexDirection: 'row',
        backgroundColor: 'red',
        padding:8,
        borderRadius: 6,
        justifyContent:'space-around',
        width:60
    },
    PinButtonText:{
        color:"white"
    },

})


