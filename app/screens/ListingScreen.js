import React, { useState, useEffect } from 'react';
import { View, StyleSheet, FlatList, Alert, TouchableWithoutFeedback} from 'react-native';

import {MaterialCommunityIcons} from '@expo/vector-icons'
import colors from '../config/color';

import AppScreen from '../components/AppScreen';
import AppText from '../components/AppText';
import AppCard from '../components/AppCard';
import AppPicker from '../components/AppPicker';
import DataManager from '../config/DataManager';



const categories = [
    {label: "Food", icon: "food", value: 1},
    {label: "Sightseeing", icon: "earth", value: 2},
    {label: "Accomodation", icon: "bed", value: 3},
]

let commonData = DataManager.getInstance();

const getListings = () => {
    return commonData.getListings()
}

const initialListings = getListings()


function ListingScreen({navigation}) { 

    const [listings, updateListings] = useState(initialListings)
    const [category, setCategory] = useState(null);

    const sortListings = (item) => {
        const sortedListings = initialListings.filter(listing => listing.category === item)
        updateListings(sortedListings)
    }

    const resetListings = () => {
        updateListings(commonData.getListings())
        setCategory(null)
    }

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

      React.useEffect(() => {
        const focus = navigation.addListener('focus', () => {
            updateListings(commonData.getListings())
        });
    
        return focus;
      }, [navigation]);

    const handleDelete = (listItem) => {
        console.log(listItem)
        commonData.deleteListing(listItem)
        updateListings(commonData.getListings())
    }

        return (
            <AppScreen style={styles.container}>
                <View style={styles.row}> 
                    <AppText style={styles.text}>Listings</AppText>
                    <View style={styles.rightSide}>
                        <AppPicker selectedItem={category} onSelectItem={item => {setCategory(item), sortListings(item.label)}} data={categories} icon='dots-vertical' title="Sort"/>
                        <TouchableWithoutFeedback onPress={resetListings}><MaterialCommunityIcons name='refresh' size={30} color={colors.black} /></TouchableWithoutFeedback>
                    </View>
                </View>
                 <FlatList 
                 style={styles.center}
                 data = {listings}
                 keyExtractor = { listing => listing.id.toString()}
                 renderItem = {({item}) => 
                    <AppCard
                    image={item.image}
                    title={item.place}
                    category={item.category}
                    deleteOnPress={() => alertDelete(item)}
                    editOnPress={() => navigation.navigate("EditListing", {item: item})}
                    onPress={() => navigation.navigate("MoreInformation", {item: item})}/>}
                />
            </AppScreen>
        );
    } 


const styles = StyleSheet.create({
    text: {
        fontWeight: 'bold',
        marginBottom: 15,
        fontSize: 20,
        paddingLeft: 20
    },
    container: {
        marginTop: 55
    }, 
    navbar: {
        flex: 1,
        justifyContent: 'flex-end'
    },
    row: {
        flexDirection: 'row',
        alignContent: 'center',
        justifyContent: 'space-between',
        paddingRight: 20,
        marginBottom: 10,
    },
    rightSide: {
        flexDirection: 'row'
    }
})

export default ListingScreen;