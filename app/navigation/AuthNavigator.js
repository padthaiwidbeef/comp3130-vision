import React from 'react';

import {createStackNavigator} from '@react-navigation/stack'

import WelcomeScreen from '../screens/WelcomeScreen'
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import TabNavigator from './TabNavigator';
import MoreInformationScreen from '../screens/MoreInformationScreen';
import EditListingScreen from '../screens/EditListingScreen';



const AppStack = createStackNavigator();

const AuthNavigator = () => (
    <AppStack.Navigator>
        <AppStack.Screen name="Welcome" component={WelcomeScreen} options={{headerShown:false}}/>
        <AppStack.Screen name="Login" component={LoginScreen} options={{headerShown:false}}/>
        <AppStack.Screen name="Register" component={RegisterScreen} options={{headerShown:false}}/>
        <AppStack.Screen name="Home" component={TabNavigator} options={{headerShown:false}}/> 
        <AppStack.Screen name="MoreInformation" component={MoreInformationScreen} options={{headerShown:false}}/>
        <AppStack.Screen name="EditListing" component={EditListingScreen} options={{headerShown:false}}/>
    </AppStack.Navigator>
)

export default AuthNavigator;