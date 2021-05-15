import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';

import {useNavigation} from '@react-navigation/stack'
import {MaterialCommunityIcons} from '@expo/vector-icons';
import colors from '../config/color';

import AppText from '../components/AppText'

function Navbar({navigation}) {

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.navigate("Home")} style={styles.item}>
                <MaterialCommunityIcons name="home" size={30} color={colors.white}/> 
                <AppText style={styles.text}>Home</AppText>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("Listings")} style={styles.item}>
                <MaterialCommunityIcons name="format-list-bulleted" size={30} color={colors.white}/> 
                <AppText style={styles.text}>Listings</AppText>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("NewListing")}style={styles.item}>
                <MaterialCommunityIcons name="plus-circle" size={30} color={colors.white}/> 
                <AppText style={styles.text}>Add Listing</AppText>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: colors.primary,
        height: 60
    },
    item: {
        flexDirection: 'column',
        alignItems: 'center'   
    },
    text: {
        fontSize: 15,
        color: colors.white
    }
})

export default Navbar;