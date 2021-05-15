import React from 'react';
import { View, StyleSheet, Image, Text, TouchableWithoutFeedback } from 'react-native';
import colors from '../config/color';

function AppListItem({image, title, subtitle, iconComponent, onPress}) {
    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <View style={styles.container}>
                {iconComponent}
                {image && <Image style={styles.image} source={image}/>}
                <View style={styles.textContainer}>
                    <Text style={styles.title}>{title}</Text>
                    {subtitle && <Text>{subtitle}</Text> }
                </View>
            </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        marginTop: 10
    },
    image: {
        height:75,
        width: 75,
        borderRadius:100,
        backgroundColor: '#'+Math.floor(Math.random()*16777215).toString(16)
        
    },
    textContainer: {
        flexDirection: "column",
        justifyContent: 'center',
        marginLeft: 20
    },
    title: {
        fontWeight: "bold",
    }
})

export default AppListItem;