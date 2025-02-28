import React from 'react';
import { Image, ActivityIndicator } from 'react-native';
import { Text, View } from 'react-native';
import { globalStyles } from '../styles/styles';

const loadingScreen = () => {
    return (
        <View
            style={globalStyles.background}>
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