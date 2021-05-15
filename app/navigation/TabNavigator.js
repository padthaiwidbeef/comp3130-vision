import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import NewListingScreen from '../screens/NewListingScreen';
import ListingScreen from '../screens/ListingScreen';
import HomeScreen from '../screens/HomeScreen'

import {MaterialCommunityIcons} from '@expo/vector-icons';
import colors from '../config/color';

const AppTab = createBottomTabNavigator();

const TabNavigator = () => (
    <AppTab.Navigator 
        tabBarOptions={{
         activeTintColor: colors.primary,
         style:{height:60},
         tabStyle:{fontSize: 20}
    }} >
        <AppTab.Screen name="Home" component={HomeScreen} options={{
            tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="home" color={color} size={size} /> )
            }}/>
        <AppTab.Screen name="Listings" component={ListingScreen} options={{
            tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="format-list-bulleted" color={color} size={size} /> )
            }}/>
        <AppTab.Screen name="New Listing" component={NewListingScreen}options={{
            tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="plus-circle" color={color} size={size} /> )
            }}/>
    </AppTab.Navigator>
)

export default TabNavigator
