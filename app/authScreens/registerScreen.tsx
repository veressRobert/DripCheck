import {View, Text, Image, TextInput, Pressable} from 'react-native';
import { Checkbox } from 'expo-checkbox';
import React, { useState } from 'react';
import { globalStyles } from '../styles/styles';
import {Link} from 'expo-router';
import { register } from '../providers/firebaseAuth';

const registerScreen = () => {
    const [isChecked, setChecked] = useState(false);
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
                <TextInput style={globalStyles.loginTextInput} onChangeText={setEmail} placeholder='Email'>Email</TextInput>
                <Text style={ globalStyles.loginText }>Password</Text>
                <TextInput style={globalStyles.loginTextInput} onChangeText={setPassword} placeholder='Password' >Password</TextInput>
                <View style={{ paddingLeft: '5%', paddingVertical: '5%', flexDirection: 'row' }}>
                    <Checkbox value={isChecked} onValueChange={setChecked}/>
                    <Text style={{ paddingLeft: '2%', 
                        color: '#FC9104',
                        fontSize: 14,}}>
                        Are you a creator?
                    </Text>
                </View>
            
            <Pressable  style={globalStyles.loginButton} onPress={() =>register(email,password)}><Text style={{alignSelf: "center", color: "white", fontSize:13}}>Sign in</Text></Pressable>
            
        </View>
        <View style={{ flex: 5 }} />
    </View>
  );
}

export default registerScreen;