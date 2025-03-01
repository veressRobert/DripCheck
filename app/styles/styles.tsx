import { Text, View, StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({
    background: {
        backgroundColor: '#043351',
        flex:1,
    },
    text: {
        color: '#FC9104',
    },
    loginText: {
        color: '#FC9104',
        fontSize: 14,
        paddingLeft: '5%',
        paddingTop: '8%',
        paddingBottom: '2%',
    },
    loginTextInput: {
        color: 'white',
        borderWidth: 1, 
        borderColor: 'white', 
        alignSelf: 'center', 
        borderRadius: 10,
        width:'90%',
        fontSize: 13,
        paddingLeft: 14,
        paddingTop: 10,
        paddingBottom: 10,
    },
    loginButton: {
        width: '90%',
        alignSelf: 'center',
        borderRadius: 10,
        backgroundColor: '#FC9104',
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 10,
        paddingRight: 10,
    }
});

