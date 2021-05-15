import React from 'react';
import { View, Image, TouchableOpacity, StyleSheet, TouchableWithoutFeedback } from 'react-native';

import {MaterialCommunityIcons} from '@expo/vector-icons'
import colors from '../config/color';

import AppText from './AppText';
import { Colors } from 'react-native/Libraries/NewAppScreen';

function AppCard({title, category, image, onPress, editOnPress, deleteOnPress}) {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.container}>
                <Image source={image} style={styles.image}/>
                <View style={styles.row}>
                    <View style={styles.column}>
                        <AppText style={styles.title}> {title} </AppText>
                        <AppText style={styles.category}> {category} </AppText>
                    </View>
                    <View style={styles.icons}>
                        <TouchableWithoutFeedback onPress={editOnPress}>
                            <MaterialCommunityIcons style={styles.icons} name='pencil' size={27} color={colors.black}/>
                        </TouchableWithoutFeedback>
                        <TouchableWithoutFeedback onPress={deleteOnPress}>
                            <MaterialCommunityIcons style={styles.icons} name='delete' size={27} color={colors.black}/>
                        </TouchableWithoutFeedback>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    );

}

const styles = StyleSheet.create({
    container: {
        borderRadius:20,
        overflow: "hidden",
        marginBottom: 25,
        width: "90%",
        alignSelf: "center",
        backgroundColor: colors.lightGrey
    },
    image: {
        height: 200,
        width: "100%",
    },
    title: {
        fontWeight: "bold",
        fontSize: 18,
    },
    category: {
        fontSize: 15,
    },
    icons: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 5
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 5,
        paddingRight: 5
    },
    column: {
        flexDirection: 'column'
    }
})

export default AppCard;