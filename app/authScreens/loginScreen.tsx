import { View, Text, Image, TextInput, Button, Pressable, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import { globalStyles } from '../styles/styles';
import { signIn } from '../providers/firebaseAuth';
import { Link } from 'expo-router';
import UploadMedia from '../components/UploadMedia.js';
const loginScreen = () => {
  const [email,setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <View 
    style={globalStyles.background}>
        <View style={{ flex: 1 }} />
        <Image style={{ width: '35%', resizeMode: 'contain', alignSelf:'center', flex: 3}} source={require('../../assets/images/logo1.jpg')} />
        <View style={{ flex: 3 }} />
        <View style={{ flex: 10, width:'80%', borderWidth: 1, borderColor: 'white', alignSelf: 'center', borderRadius: 10 }}>    
            <Text style={ globalStyles.loginText } >Email</Text>
            <TextInput style={globalStyles.loginTextInput} onChangeText={setEmail} placeholder='Email'>veressrobert73@gmail.com</TextInput>
            <Text style={ globalStyles.loginText }>Password</Text>
            <TextInput style={globalStyles.loginTextInput} onChangeText={setPassword} placeholder='Password' >password</TextInput>
            <Pressable><Text style={globalStyles.loginText}>Forgot password?</Text></Pressable>
            <Pressable  style={globalStyles.loginButton} onPress={() =>signIn(email,password)}><Text style={{alignSelf: "center", color: "white", fontSize:13}}>Sign in</Text></Pressable>
            <Text style={globalStyles.loginText}>Don't have an account?</Text>
            <Link href="./registerScreen" asChild>
              <Pressable style={globalStyles.loginButton} ><Text style={{ alignSelf: "center", color: "white", fontSize: 13 }}>Sign up</Text></Pressable>
            </Link>    
        </View>
        <View style={{ flex: 3 }} />
    </View>
  );
}

export default loginScreen;