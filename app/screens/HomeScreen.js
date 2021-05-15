import React from 'react';
import { View, StyleSheet, Button, TouchableWithoutFeedback } from 'react-native';

import AppIcon from '../components/AppIcon.js';
import AppListItem from '../components/AppListItem.js';
import AppScreen from '../components/AppScreen.js';
import AppText from '../components/AppText.js';
import AppBubbleText from '../components/AppBubbleText.js'
import DataManager from '../config/DataManager.js';

import colors from '../config/color.js'
import {MaterialCommunityIcons} from '@expo/vector-icons'

function HomeScreen({navigation}) {

    const logOut = () => {
        navigation.navigate("Welcome")
        let commonData = DataManager.getInstance();
        commonData.setUserID(null);
    }

    const getUsers = () => {
        let commonData = DataManager.getInstance();
        return commonData.getUsers()
    }
    
    const users = getUsers()

    const getCurrentUserID = () => {
        let commonData = DataManager.getInstance();
        return commonData.getUserID();
    }

    const getCurrentUser = (id) => {
        return users.find((user) => user.id === id)
    }

    const currentUserID =  getCurrentUserID();
    const currentUser = getCurrentUser(currentUserID)

    return (
        <AppScreen style={styles.container}>
            <View style={styles.padding}>
                <View style={styles.row}>
                    <AppText style={styles.text}>Home</AppText>
                    <TouchableWithoutFeedback onPress={logOut}>
                        <MaterialCommunityIcons name='logout' size={30} color={colors.black} />
                    </TouchableWithoutFeedback>
                </View>
                <AppListItem 
                    image={currentUser.image}
                    title={currentUser.name}
                    subtitle={currentUser.email}/>
                <View style={styles.linksContainer}>
                    <AppListItem
                        title="User Lstings"
                        iconComponent={<AppIcon name="view-grid" size={50} iconColor={colors.black} backgroundColor={colors.grey}/>}/>
                    <AppListItem
                    title="Friends"
                    iconComponent={<AppIcon name="account-heart" size={50} iconColor={colors.black} backgroundColor={colors.grey}/>}/>
                </View>
            </View>
            <AppBubbleText>{currentUser.bio}</AppBubbleText> 
        </AppScreen>    
    );
}


const styles = StyleSheet.create({
    container: {
        marginTop:55,
    },
    linksContainer: {
        marginVertical: 50,
        justifyContent: "space-around",
        marginTop: 20
    },
    text: {
        fontWeight: 'bold',
        marginBottom: 15,
        fontSize: 20,
    },
    navbar: {
        flex: 1,
        justifyContent: 'flex-end'
    },
    padding: {
        paddingLeft: 20
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingRight: 25
    }
})

export default HomeScreen;