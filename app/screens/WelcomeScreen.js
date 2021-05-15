import React from 'react';
import { StyleSheet, Text } from 'react-native';
import {useNavigation} from '@react-navigation/stack'

import AppButton from '../components/AppButton';
import AppScreen from '../components/AppScreen';
import AppRoundImage from '../components/AppRoundImage';
import AppText from '../components/AppText';


function WelcomeScreen({navigation}) {
    return(
        <AppScreen style={styles.container}>
            <AppText style={styles.heading}>Welcome to <Text style={styles.bold}>Vision</Text></AppText>
            <AppRoundImage style={styles.welcomeImage} link={require("../assets/images/tokyo.jpeg")}/>
            <AppButton title="Login" icon="login" onPress={ () => navigation.navigate("Login")}/>         
            <AppButton title="Register" icon="account-plus" onPress= { () => navigation.navigate("Register")}/>           
        </AppScreen>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        marginTop: 100,
    },
    heading: {
        marginBottom: 30,
    },
    bold: {
        fontWeight: "bold"
    },
    welcomeImage: {
        width: 200,
        height: 200,
        marginBottom: 25
    }
})

export default WelcomeScreen;