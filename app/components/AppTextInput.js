import React from 'react';
import { View, StyleSheet, TextInput, Platform  } from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons'
import colors from '../config/color.js'

function AppTextInput({icon, ...otherProps}) {
    return (
        <View style={styles.container}>
            { icon && <MaterialCommunityIcons name={icon} size={22}/>}
            <TextInput style={styles.textInput} {...otherProps}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.grey,
        borderColor: colors.black,
        borderWidth: 2,
        flexDirection: "row",
        alignItems: "center",
        borderRadius: 20,
        padding: 10,
        marginVertical: 10,
        width: '95%'
        
    },
    textInput:{
        fontSize: 15,
        color: "#000",
        flex: 1,
        marginLeft: 10
    }
})

export default AppTextInput;