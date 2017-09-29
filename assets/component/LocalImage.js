import React, {Component} from 'react'
import {
    Image,
    Dimensions
} from 'react-native'

const LocalImage = ({source, originalWidth, originalHeight}) => {
    let windowWidth = Dimensions.get('window').width
    let widthChange = (windowWidth-16)/originalWidth //our component has a padding of 8 on each side. remove 16 px off of the window width
    let newWidth = originalWidth * widthChange
    let newHeight = originalHeight * widthChange
    return (
        <Image source={source} style ={{width: newWidth, height: newHeight}}/>
    )
}

export default LocalImage