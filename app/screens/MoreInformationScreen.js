import React from 'react';
import { View, Text, StyleSheet, TouchableWithoutFeedback, Alert} from 'react-native';

import {MaterialCommunityIcons} from '@expo/vector-icons'
import colors from '../config/color';

import AppCard from '../components/AppCard';
import AppText from '../components/AppText';
import AppBubbleText from '../components/AppBubbleText';
import DataManager from '../config/DataManager';



function MoreInformationScreen({route, navigation}) {

    const item = route.params.item
    let commonData = DataManager.getInstance();
    
    const alertDelete = (item) => {
        Alert.alert("Delete Listing", "Are you sure you want to delete this listing?",
        [
          {
            text: "Cancel",
          },
          {
              text: "Delete",
              onPress: () => {handleDelete(item)},
          }
        ],
        {
          cancelable: true,
          onDismiss: () =>
            Alert.alert(
              "This alert was dismissed by tapping outside of the alert dialog."
            ),
        }
      )};

    const handleDelete = (listItem) => {
        commonData.deleteListing(listItem)
        navigation.navigate("Listings", {item: item})
    }

    return (
        <View style={styles.container}>
            <View style={styles.topBar}>
                <AppText style={styles.text}>Listings</AppText>
            </View>
            <AppCard
                image={item.image}
                title={item.place}
                category={item.category}
                deleteOnPress={() => alertDelete(item)}
                editOnPress={() => navigation.navigate("EditListing", {item: item})}/>
            <AppText style={styles.locationText}>{item.location}</AppText>
            <AppBubbleText>{item.description}</AppBubbleText>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop:55
    },
    text: {
        fontWeight: 'bold',
        marginBottom: 15,
        fontSize: 20,
        paddingLeft: 20
    },
    locationText: {
        fontSize: 17,
        paddingLeft: 20,
        marginBottom: 15,
    },
    topBar: {
        flexDirection: "row",
        justifyContent: 'space-between',
        paddingRight: 20
    }
})

export default MoreInformationScreen;