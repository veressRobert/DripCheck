import {View, Text, Image, TextInput, Button, Pressable} from 'react-native';
import {Link} from 'expo-router';
import React from 'react';
import { globalStyles } from '../styles/styles';

const forgotPasswordScreen = () => {
  return (
    <View 
    style={globalStyles.background}>
        <View style={{ flex: 1 }} />
        <Image style={{ width: '35%', resizeMode: 'contain', alignSelf:'center', flex: 3}} source={require('../../assets/images/logo1.jpg')} />
        <View style={{ flex: 3 }} />
        <View style={{ flex: 4, width:'80%', borderWidth: 1, borderColor: 'white', alignSelf: 'center', borderRadius: 10 }}>    
            <Text style={ globalStyles.loginText } >Email</Text>
            <TextInput style={globalStyles.loginTextInput}></TextInput>
              <View style={{ height: 20 }} />
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingLeft: '5%', paddingRight: '5%' }} >
                  <Link href="./loginScreen" asChild>
                  <Pressable style={{
                        width: '45%',
                        borderRadius: 10,
                        borderWidth: 1,
                        borderColor: 'red',
                        paddingVertical: 10,
                  }}  >
                      <Text style={{ alignSelf: "center", color: "white", fontSize: 13 }}>Cancel</Text>
                      </Pressable>
                 </Link>
                  <Pressable style={{
                        width: '45%',
                        borderRadius: 10,
                        backgroundColor: '#FC9104',
                        paddingVertical: 10,
                  }} >
                      <Text style={{ alignSelf: "center", color: "white", fontSize: 13 }}>Reset Password</Text>
                  </Pressable>
              </View>

            
        </View>
        <View style={{ flex: 5 }} />
    </View>
  );
}

export default forgotPasswordScreen;