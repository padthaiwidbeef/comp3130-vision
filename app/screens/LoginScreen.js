import React from 'react';
import {StyleSheet, Text } from 'react-native';
import {Formik} from 'formik';
import * as Yup from 'yup';

import DataManager from '../config/DataManager';

import AppButton from '../components/AppButton';
import AppTextInput from '../components/AppTextInput';
import AppScreen from '../components/AppScreen';
import AppText from '../components/AppText';

import colors from '../config/color';



const getUsers = () => {
    let commonData = DataManager.getInstance();
    return commonData.getUsers()
}

const users = getUsers()

const validationSchema = Yup.object().shape(
    {
        email: Yup.string().required().email(),
        password: Yup.string().required().min(4).max(8)
    }
)

const validateUser = ({values}) => {
    return(
        users.some(user =>  user.email === values.email && user.password === values.password)
    )
}

const getUser = (email) => {
    return users.find((user) => user.email === email)
}

const createUser = (email) => {
    let commonData = DataManager.getInstance();
    let userID = getUser(email).id
    commonData.setUserID(userID);
}


function LoginScreen({navigation}) { 

    return (
        <AppScreen style={styles.center}>
            <AppText style={styles.text}>LOGIN</AppText>
            <Formik
                initialValues={{email: '', password: ''}}
                onSubmit = {(values, {resetForm}) =>  {
                    if(validateUser({values})){
                        resetForm();
                        createUser(values.email)
                        navigation.navigate("Home") 
                    } else alert('Login details are incorrect!')
                }}
                validationSchema={validationSchema}
                >
            {({handleChange, handleSubmit, errors}) => (
                <>
                <AppTextInput 
                    icon="email" 
                    placeholder="Email Address" 
                    keyboardType="email-address" 
                    autoCapitalize='none' 
                    autoCorrect={false}
                    onChangeText = {handleChange('email')}/>
                <Text style={styles.smallText}>{errors.email}</Text>
                <AppTextInput 
                    icon="lock" 
                    placeholder="Password"
                    secureTextEntry= {true} 
                    autoCapitalize='none' 
                    autoCorrect={false}
                    onChangeText = {handleChange('password')}/>
                <Text>{errors.password}</Text>
                <AppButton 
                    onPress={handleSubmit} 
                    // onPress={() => {navigation.navigate("Home"); createUser(users[0].email)}}
                    icon="check" 
                    title="Login"/>
                </>  
            )}                                                                                                                                                                                                                                
            </Formik>
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
        marginBottom: 20
    },
    smallText: {
        color: colors.black
    }
})

export default LoginScreen;