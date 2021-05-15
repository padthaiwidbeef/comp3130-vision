import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import colors from '../config/color';

function AppBubbleText({children}) {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{children}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.grey,
        padding: 15,
        marginLeft: 15,
        marginRight: 15,
        borderRadius: 10
    },
    text: {
        fontSize: 15,
        lineHeight: 20
    }
})

export default AppBubbleText;