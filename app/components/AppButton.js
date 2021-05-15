import React from 'react';
import { Text, TouchableOpacity, StyleSheet, View, Platform} from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import colors from '../config/color'


function AppButton({title, icon, onPress}) {
    return (
        <TouchableOpacity onPress={onPress} style={styles.touch}>
            <View style={styles.button}>
                <Text style={styles.text}>{title}</Text>
                { icon && <MaterialCommunityIcons style={styles.icon} name={icon} size={22}/>}
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    touch: {
        width: '40%',
    },
    button: {  
        backgroundColor: colors.primary,
        borderRadius: 20,
        padding: 12,
        marginVertical: 10,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    text: {
        color: colors.white,
        fontSize:20,
        fontFamily: "Roboto"
    },
    icon: {
        color: colors.white,
    }
})

export default AppButton;