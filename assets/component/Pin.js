import React, {Component} from 'react';
import {StyleSheet, Text, View, Image } from 'react-native'

import UtilityNavButton from './UtilityNavButton'
import Button from './Button'
import LocalImage from './LocalImage'

export default class Pin extends Component{
    render(){
        return(
            //1. main container
            <View style={styles.PinContainer}>
                <View style={styles.PinHeader}>
                    <View style={styles.UtilityNav}>
                        {/*we will make a button component which we will pass a prop that will lead to the name of the icon*/}
                        <UtilityNavButton icon ="Back"/>
                        <UtilityNavButton icon ="Heart"/>
                        <UtilityNavButton icon ="Share"/>
                        <UtilityNavButton icon ="More"/>
                    </View>
                    <View style = {styles.PinButtonContainer}>
                        <Button red icon text="Save"/>
                    </View>
                </View>
                <View style = {styles.PinContent}>
                    <LocalImage
                        source ={this.props.pinsource.imageSource}
                        originalWidth ={this.props.pinsource.originalWidth}
                        originalHeight={this.props.pinsource.originalHeight}
                    />

                </View>

                <View style = {styles.PinMeta}>
                    <View style = {styles.PinMetaTextContainer}>
                        <Text style = {styles.PinMetaText}>Saved from</Text>
                        <Text style = {[styles.PinMetaText, styles.TextBold]}>website.com</Text>
                    </View>
                    {/*if we are going to reuse an element we should make a separate component so that its reusable.*/}
                    <View style = {styles.PinButtonContainer}>
                        <Button text ="Watch"/>
                    </View>
                </View>

                <View style = {styles.PinUser}>
                    <View style = {styles.PinUserAvatar}>
                    </View>
                    <View style = {styles.PinUserContainer}>
                        <Text style = {styles.PinUserText}>
                            <Text style = {styles.TextBold}>
                                User Name </Text> saved to <Text style = {styles.TextBold}> Spacer </Text>
                        </Text>
                        <Text style = {styles.PinUserText}>
                            Description Lorem Ipsum
                        </Text>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    PinContainer:{
        // flex:1,
        // alignSelf: 'stretch',
        backgroundColor:'white'
    },
    PinHeader:{
        backgroundColor: 'white',
        flexDirection: 'row',
        alignItems:'flex-end', //brings the icons down to the bottom left instead of the upper right
        minHeight:50, //minWidth, maxWidth, maxHeight
        justifyContent: 'space-between',
        padding: 8

    },
    UtilityNav:{
        flexDirection:'row',
        flex: 1,
        justifyContent: 'space-between',

    },
    PinButton:{
        flexDirection: 'row',
        backgroundColor: 'red',
        padding:8,
        borderRadius: 6,
        justifyContent:'space-between',
        width:60
    },
    PinButtonText:{
        color:"white"
    },
    PinButtonContainer:{
        flex: 1,
        alignItems:'flex-end' //default direction will always be column unless you specify 'row' therefore, alignitems will adjust horizontally
    },
    PinContent:{
        justifyContent: 'center',
        alignItems:"center",
        paddingLeft:8,
        paddingRight:8,
    },
    PinMeta:{
        flex:1,
        minHeight: 70,
        flexDirection:'row',
        paddingTop:16,
        paddingRight: 8,
        paddingBottom:16,
        paddingLeft: 8
    },
    PinMetaTextContainer:{

    },
    PinMetaText:{

    },
    UtilityButton:{
        backgroundColor:'#cecece',
        alignItems: 'center',
        justifyContent:'center'
    },
    UtilityButtonText:{
      color:'black',
        fontWeight:'bold'
    },
    PinUser:{
        flex:5,
        flexDirection:'row',
        paddingLeft: 8,
        paddingRight:8
    },
    PinUserAvatar:{
        width:50,
        height:50,
        backgroundColor:'black',
        borderRadius:25,
        marginRight:8

    },
    ImagePlaceholder:{
        backgroundColor:'#1e1e1e',
        flex:1,
        alignSelf:'stretch',
        borderRadius:6
    },
    TextBold:{
        fontWeight:'bold'
    }
})


