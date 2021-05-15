import React from 'react';
import { View, StyleSheet, Image } from 'react-native';

function AppRoundImage({link, style}) {
    return (
        <View>
            <Image source={link} style={[styles.image, style]}></Image>
        </View>
    );
}

const styles = StyleSheet.create({
    image: {
        height: 100,
        width: 100,
        borderRadius: 100,
    }
})

export default AppRoundImage;