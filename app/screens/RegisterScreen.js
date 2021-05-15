import React, { useState} from 'react';
import {StyleSheet, Text, TextInput } from 'react-native';
import {Formik} from 'formik';
import * as Yup from 'yup';

import AppButton from '../components/AppButton';
import AppTextInput from '../components/AppTextInput';
import AppScreen from '../components/AppScreen';
import AppText from '../components/AppText';
import AppFormPicker from '../components/AppFormPicker';
import DataManager from '../config/DataManager';

import colors from '../config/color';


const categories = [
    {label: "Food", icon: "food", value: 1},
    {label: "Sightseeing", icon: "earth", value: 2},
    {label: "Accomodation", icon: "bed", value: 3},
]

function RegisterScreen({navigation}) { 

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [bio, setBio] = useState("");
    const [nameError, setNameError] = useState("")
    const [emailError, setEmailError] = useState("")
    const [passwordError, setPasswordError] = useState("")
    const [bioError, setBioError] = useState("")

    const doErrorCheck = () => {
        setNameError(name.length > 0 ? "" : "Please input a valid Name")
        setEmailError(email.length > 0 ? "" : "Please input a valid Email")
        setPasswordError(password.length > 0 ? "" : "Please input a valid Password")
        setBioError(bio.length > 0 ? "" : "Please input a valid Bio")
        return((name.length > 0 && email.length > 0 && password.length > 0 && bio.length > 0 ? true : false))
    }

    const addUser = () => {

        let commonData = DataManager.getInstance();
    
        const initialUsers = commonData.getUsers()
        const listingID = initialUsers.length + 1
        const newUser = {
            name: name,
            email: email,
            password: password,
            bio: bio,
            image: {uri: `https://robohash.org/${name}`},
            id: listingID
        }

        console.log(newUser);
        commonData.addUser(newUser)
    }

    return (
        <AppScreen style={styles.center}>
            <AppText style={styles.text}>Register New User</AppText>
                <AppTextInput 
                    icon="rename-box" 
                    placeholder="Name" 
                    autoCorrect={false}
                    value={name}
                    onChangeText={(inputText) => setName(inputText)}/>
                {nameError.length > 0 ? <Text style={styles.error}>{nameError}</Text> : <></>}
                <AppTextInput 
                    icon="email" 
                    placeholder="Email Address" 
                    keyboardType="email-address"  
                    autoCapitalize='none' 
                    autoCorrect={false}
                    value={email}
                    onChangeText={(inputText) => setEmail(inputText)}/>
                {emailError.length > 0 ? <Text style={styles.error}>{emailError}</Text> : <></>}
                <AppTextInput 
                    icon="lock" 
                    placeholder="Password"
                    secureTextEntry= {true} 
                    autoCapitalize='none' 
                    autoCorrect={false}
                    value={password}
                    onChangeText={(inputText) => setPassword(inputText)}/>
                {passwordError.length > 0 ? <Text style={styles.error}>{passwordError}</Text> : <></>}
               
                <TextInput
                    placeholder="Tell everyone a bit about yourself!"
                    style={styles.input}
                    onChangeText={setBio}
                    value={bio}/>
                {bioError.length > 0 ? <Text style={styles.error}>{bioError}</Text> : <></>}
                <AppButton 
                    onPress={() => {
                        if(doErrorCheck()) {
                            addUser();
                            navigation.navigate("Login")  
                        }
                    }}
                    icon="plus" 
                    title="Register"/>
        </AppScreen>
    );
}

const styles = StyleSheet.create({
    center:{
        alignItems: 'center',
        marginTop: 55
    },
    text:{
        fontWeight: 'bold',
        marginBottom: 10
    },
    smallText: {
        color: colors.black
    },
    input: {
        height: 200,
        width: '95%',
        margin: 12,
        borderWidth: 2,
        borderRadius: 10,
        padding: 10,
        backgroundColor: colors.grey,
        textAlignVertical: 'top'
      },
      error: {
          color: '#FF0000',
          fontSize: 13,
          marginBottom: 8,
          marginTop: -5

      }
})

export default RegisterScreen;