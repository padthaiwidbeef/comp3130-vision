import React, {useState} from 'react';
import { View, Text, StyleSheet, TouchableWithoutFeedback, Modal, Button, FlatList } from 'react-native';

import {MaterialCommunityIcons} from '@expo/vector-icons'
import colors from '../config/color';

import AppText from './AppText';
import AppScreen from './AppScreen';
import AppListItem from './AppListItem';
import AppIcon from './AppIcon'



function AppFormPicker({data, icon, title, selectedItem, onSelectItem}) {
    

    const [modalVisible, setModalVisible] = useState(false);

    return (
        <>
            <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
                <View style={styles.container}>
                    <View style={styles.firstItems}>
                        <MaterialCommunityIcons name={icon} size={24} color={colors.black}/>
                        <AppText style={styles.text}>{selectedItem ? selectedItem.label : title }</AppText>
                    </View>
                    <MaterialCommunityIcons name="chevron-down" size={24} color={colors.black}/>
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
        fontSize:13,
        color: colors.black,
        marginLeft: 7,
    },
    firstItems: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderWidth: 2,
        backgroundColor: colors.grey,
        borderRadius: 15,
        paddingLeft: 15,
        paddingRight: 10,
        height: 53,
        marginBottom: 20,
        width: '95%',
    },
    modalContainer: {
        padding: 20
    }
})

export default AppFormPicker;