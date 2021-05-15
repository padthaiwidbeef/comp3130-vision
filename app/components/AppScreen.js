import React from 'react';
import { View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

function AppScreen({children, style}) {
    return (
       <View style={[styles.main, style]}>
           {children}
       </View>
    );
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        marginTop: Constants.statusBarHeight,
    }
})

export default AppScreen;