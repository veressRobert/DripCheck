import {View, Text, Image, TextInput, Button, Pressable} from 'react-native';
import React from 'react';
import { globalStyles } from '../styles/styles';
import {Link} from 'expo-router';

const loginScreen = () => {
  return (
    <View 
    style={globalStyles.background}>
        <View style={{ flex: 1 }} />
        <Image style={{ width: '35%', resizeMode: 'contain', alignSelf:'center', flex: 3}} source={require('../../assets/images/logo1.jpg')} />
        <View style={{ flex: 3 }} />
        <View style={{ flex: 10, width:'80%', borderWidth: 1, borderColor: 'white', alignSelf: 'center', borderRadius: 10 }}>    
            <Text style={ globalStyles.loginText } >Email</Text>
            <TextInput style={globalStyles.loginTextInput}></TextInput>
            <Text style={ globalStyles.loginText }>Password</Text>
            <TextInput style={globalStyles.loginTextInput}></TextInput>
            <Link href={"/screens/forgotPasswordScreen"} asChild><Pressable><Text style={globalStyles.loginText}>Forgot password?</Text></Pressable></Link>
            <Pressable  style={globalStyles.loginButton} ><Text style={{alignSelf: "center", color: "white", fontSize:13}}>Sign in</Text></Pressable>
            
        </View>
        <View style={{ flex: 5 }} />
    </View>
  );
}

export default loginScreen;