import React, { useEffect, useState } from 'react';
import { Image, ActivityIndicator, StatusBar } from 'react-native';
import { Text, View } from 'react-native';
import { globalStyles } from '../styles/styles';
import { Link } from 'expo-router';
import { Redirect,router } from 'expo-router';

const delay = (ms: number) => new Promise(res => setTimeout(res, ms));

const YourFunction = async () => {
    await delay(2000);
    console.log("Waited 2s");
    router.replace("./loginScreen");
};


const loadingScreen = () => {

    useEffect(() => {
        YourFunction();
    
    }, []);
    
    return (
        <View
        
            style={globalStyles.background}>
                            <StatusBar
                              backgroundColor={globalStyles.background.backgroundColor}
                              barStyle="light-content"
                            />
            <View style={{ flex: 1}}>
                <Image style={{ width: '35%', resizeMode: 'contain', alignSelf:'center' }} source={require('../../assets/images/logo1.jpg')} />
            </View>
            <View style={{ flex: 1 }} />
            <ActivityIndicator animating={true}
                color="#FC9104"
                size="large"/>
            <View style={{ flex: 1 }} />
            <View style={{ flex: 1 }} />
            

        </View>
    );
};


export default loadingScreen;