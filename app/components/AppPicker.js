import React, {useState} from 'react';
import { View, Text, StyleSheet, TouchableWithoutFeedback, Modal, Button, FlatList } from 'react-native';

import {MaterialCommunityIcons} from '@expo/vector-icons'
import colors from '../config/color';

import AppText from './AppText';
import AppScreen from './AppScreen';
import AppListItem from './AppListItem';
import AppIcon from './AppIcon'



function AppPicker({data, icon, title, selectedItem, onSelectItem}) {
    

    const [modalVisible, setModalVisible] = useState(false);

    return (
        <>
            <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
                <View style={styles.container}>
                    <AppText style={styles.text}>{selectedItem ? selectedItem.label : title }</AppText>
                    <MaterialCommunityIcons name="chevron-down" size={24} color={colors.white}/>
                </View>
            </TouchableWithoutFeedback>
            <Modal visible={modalVisible} animationType="slide">
                <AppScreen>
                    <Button title="Close" onPress={() => setModalVisible(false)}></Button>
                    <View style={styles.modalContainer}>
                        <FlatList 
                            data={data}
                            keyExtractor={item => item.value.toString()}
                            renderItem= { ({item}) =>
                                <AppListItem onPress={() => {
                                    setModalVisible(false)
                                    onSelectItem(item)
                                }} title={item.label} iconComponent={<AppIcon name={item.icon} size={50} iconColor={colors.black} backgroundColor={colors.grey}/>}/>
                            }/>
                    </View>
                </AppScreen>
            </Modal>
        </>
    );
}

const styles = StyleSheet.create({
    text: {
        fontSize: 16,
        color: colors.white,
        fontWeight: 'bold'
    },
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: 'rgba(52, 52, 52, 0.8)',
        borderRadius: 10,
        paddingLeft: 15,
        paddingRight: 10,
        height: 30,
        width: 170
    },
    modalContainer: {
        padding: 20
    }
})

export default AppPicker;