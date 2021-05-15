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

function EditListingScreen({navigation, route}) { 

    const item = route.params.item
    let commonData = DataManager.getInstance();

    React.useEffect(() => {
        const focus = navigation.addListener('focus', () => {
            if(item.category === "Food")
                setCategory(categories[0])
            if(item.cateogry === "Sightseeing")
                setCategory(categories[1])
            if(item.cateogry === "Accomodation")
                setCategory(categories[2])
        });
    
        return focus;
      }, [navigation]);

    const [place, setPlace] = useState(item.place);
    const [location, setLocation] = useState(item.location);
    const [category, setCategory] = useState("");
    const [description, onChangeDescription] = useState(item.description);
    // const [image, setImage] = useState()
    const [placeError, setPlaceError] = useState("")
    const [locationError, setLocationError] = useState("")
    const [categoryError, setCategoryError] = useState("")
    const [descriptionError, setDescriptionError] = useState("")


    const doErrorCheck = () => {
        setPlaceError(place.length > 0 ? "" : "Please input a valid Place")
        setLocationError(location.length > 0 ? "" : "Please input a valid Location")
        setCategoryError(category.label.length > 0 ? "" : "Please input a valid Category")
        setDescriptionError(description.length > 0 ? "" : "Please input a valid Description")
        return((place.length > 0 && place.length > 0 && category.label.length > 0 && description.length > 0 ? true : false))
    }

    const editListing = () => {

        const updatedListing = {
            place: place,
            location: location,
            category: category.label,
            description: description,
            image: item.image,
            id: item.id
        }
        console.log(updatedListing);
        commonData.editListing(updatedListing)
    }

    return (
        <AppScreen style={styles.center}>
            <AppText style={styles.text}>Edit Listing</AppText>
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
                            editListing();
                            navigation.navigate("Listings") 
                        }
                    }}
                    // onPress={openImagePickerAsync}
                    icon="plus" 
                    title="Edit"/>
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

export default EditListingScreen;