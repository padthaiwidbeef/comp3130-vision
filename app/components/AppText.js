import React from 'react';
import { Text, StyleSheet } from 'react-native';

import colors from '../config/color';

function AppText({children, style}) {
    return (
        <Text style={[styles.main, style]}>{children}</Text>
  
    )}

const styles = StyleSheet.create({
    main: {
        fontFamily: "Roboto",
        fontSize: 25,
        color: colors.black
    }
})

export default AppText;