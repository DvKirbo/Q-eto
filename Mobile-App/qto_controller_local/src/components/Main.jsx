/* eslint-disable indent */
/* eslint-disable react/jsx-indent */
/* eslint-disable no-trailing-spaces */
/* eslint-disable eol-last */
import React, { useEffect } from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { ReactNativeJoystick } from "@korsolutions/react-native-joystick"
import axios from 'axios'
import { Header } from 'react-native/Libraries/NewAppScreen'

const Main = () => {
    const url = "http://192.168.18.125/640x480.jpg"
    //const url =  "https://pokeapi.co/api/v2/pokemon/ditto"

    const handleCamera = () =>{
    }//https://i.pinimg.com/236x/82/68/96/82689695fcaaa778df075158e230be8e.jpg

    return (
        <View style={MainStyle.container}>
            <Text style={MainStyle.text}>Camara del robot </Text>
            <Image style={MainStyle.camara} source={{ uri: 'http://192.168.43.50/160x120.mjpeg' }} />
            <View>
                <ReactNativeJoystick color="#06b6d4" radius={75} onMove={(data) => console.log(data)} />
                <View>

                </View>
            </View>
        </View>
    )
}
const MainStyle = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        marginTop: 20,
        fontSize: 30,
        fontWeight: 'bold',
        fontFamily: 'Roboto'
    },
    camara: {
        padding: 20,
        margin: 20,
        width: 300,
        height: 300,
        borderRadius: 20,
        borderColor: 'black',
        borderWidth: 2
    }

})
export default Main