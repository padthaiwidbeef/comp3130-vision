import React, { useState} from 'react';
import {StyleSheet, Text, TextInput } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

import AppButton from '../components/AppButton';
import AppTextInput from '../components/AppTextInput';
import AppScreen from '../components/AppScreen';
import AppText from '../components/AppText';
import AppFormPicker from '../components/AppFormPicker';
import DataManager from '../config/DataManager';

import colors from '../config/color';


const categories = [
    {label: "Food", icon: "food", value: 1},
    {label: "Sightseeing", icon: "earth", value: 2},
    {label: "Accomodation", icon: "bed", value: 3},
]



function NewListingScreen({navigation}) { 

    const [place, setPlace] = useState("");
    const [location, setLocation] = useState("");
    const [category, setCategory] = useState("");
    const [description, onChangeDescription] = useState("");
    // const [image, setImage] = useState()
    const [placeError, setPlaceError] = useState("")
    const [locationError, setLocationError] = useState("")
    const [categoryError, setCategoryError] = useState("")
    const [descriptionError, setDescriptionError] = useState("")

    // let openImagePickerAsync = async () => {
    //     let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
    
    //     if (permissionResult.granted === false) {
    //       alert("Permission to access camera roll is required!");
    //       return;
    //     }

    //     if (pickerResult.cancelled === true) {
    //         return;
    //       }

    //     setImage({path: pickerResult.uri})
    
    //     let pickerResult = await ImagePicker.launchImageLibraryAsync();
    //     console.log(pickerResult);
    //   }

    const doErrorCheck = () => {
        setPlaceError(place.length > 0 ? "" : "Please input a valid Place")
        setLocationError(place.length > 0 ? "" : "Please input a valid Location")
        setCategoryError(category.label.length > 0 ? "" : "Please input a valid Category")
        setDescriptionError(description.length > 0 ? "" : "Please input a valid Description")
        return((place.length > 0 && place.length > 0 && category.label.length > 0 && description.length > 0 ? true : false))
    }

    const addListing = () => {
        
        let commonData = DataManager.getInstance();
    
        const initialListings = commonData.getListings()
        const listingID = initialListings.length + 1
        const newListing = {
            place: place,
            location: location,
            category: category.label,
            description: description,
            image: require('../assets/images/question-mark.png'),
            id: listingID
        }

        console.log(newListing);
        commonData.addListing(newListing)
    }

    return (
        <AppScreen style={styles.center}>
            <AppText style={styles.text}>Create New Listing</AppText>
                <AppTextInput 
                    icon="city" 
                    placeholder="Place" 
                    autoCapitalize='none' 
                    autoCorrect={false}
                    value={place}
                    onChangeText={(inputText) => setPlace(inputText)}/>
                {placeError.length > 0 ? <Text style={styles.error}>{placeError}</Text> : <></>}
                <AppTextInput 
                    icon="map-marker" 
                    placeholder="Location"
                    autoCapitalize='none' 
                    autoCorrect={false}
                    value={location}
                    onChangeText={(inputText) => setLocation(inputText)}/>
                {locationError.length > 0 ? <Text style={styles.error}>{locationError}</Text> : <></>}
                <AppFormPicker selectedItem={category} onSelectItem={item => setCategory(item)} data={categories} icon='grid' title="Select Category"/>
                {categoryError.length > 0 ? <Text style={styles.error}>{categoryError}</Text> : <></>}
                <TextInput
                    multiline={true}
                    placeholder="Description"
                    style={styles.input}
                    onChangeText={onChangeDescription}
                    value={description}/>
                {descriptionError.length > 0 ? <Text style={styles.error}>{descriptionError}</Text> : <></>}
                <AppButton 
                    onPress={() => {
                        if(doErrorCheck()) {
                            addListing();
                            navigation.navigate("Listings") 
                        }
                    }}
                    // onPress={openImagePickerAsync}
                    icon="plus" 
                    title="Add"/>
        </AppScreen>
    );
}

const styles = StyleSheet.create({
    center:{
        alignItems: 'center',
        marginTop: 55
    },
    text:{
        fontWeight: 'bold',
        marginBottom: 10
    },
    smallText: {
        color: colors.black
    },
    input: {
        height: 200,
        width: '95%',
        margin: 12,
        borderWidth: 2,
        borderRadius: 10,
        padding: 10,
        backgroundColor: colors.grey,
        textAlignVertical: 'top'
      },
      error: {
          color: '#FF0000',
          fontSize: 13,
          marginBottom: 8,
          marginTop: -5

      }
})

export default NewListingScreen;