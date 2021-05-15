export default class DataManager {
    static myInstance = null;
    userID = "";

    initialListings = [
        {
            id: 1,
            place: "Sushi Hub",
            category: "Food",
            location: "Parramatta",
            description: "n in laoreet turpis. Nullam tristique id felis ac convallis. Nulla viverra posuere eros, id \
            consectetur nunc tempus eu. Nulla \
            scelerisque est at urna tincidunt aliquet.\
            Sed nec gravida velit.",
            image: require("../assets/images/sushi.jpg")
        },
        {
            id: 2,
            place: "Opera House",
            category: "Sightseeing",
            location: "Sydney",
            description: "n in laoreet turpis. Nullam tristique id felis ac convallis. Nulla viverra posuere eros, id \
            consectetur nunc tempus eu. Nulla \
            scelerisque est at urna tincidunt aliquet.\
            Sed nec gravida velit.",
            image: require("../assets/images/opera-house.jpg")
        },
        {
            id: 3,
            place: "Three Sisters",
            category: "Sightseeing",
            location: "Blue Mountains",
            description: "n in laoreet turpis. Nullam tristique id felis ac convallis. Nulla viverra posuere eros, id \
            consectetur nunc tempus eu. Nulla \
            scelerisque est at urna tincidunt aliquet.\
            Sed nec gravida velit.",
            image: require("../assets/images/three-sisters.jpg")
        },
        {
            id: 4,
            place: "Crinitis",
            category: "Food",
            location: "Parramatta",
            description: "n in laoreet turpis. Nullam t ristique id felis ac convallis. Nulla viverra posuere eros, id \
            consectetur nunc tempus eu. Nulla \
            scelerisque est at urna tincidunt aliquet.\
            Sed nec gravida velit.",
            image: require("../assets/images/crinitis.jpg")
        },
        {
            id: 5,
            place: "Shangri La",
            category: "Accomodation",
            location: "Sydney",
            description: "n in laoreet turpis. Nullam t ristique id felis ac convallis. Nulla viverra posuere eros, id \
            consectetur nunc tempus eu. Nulla \
            scelerisque est at urna tincidunt aliquet.\
            Sed nec gravida velit.",
            image: require("../assets/images/shangri-la.jpg")
        }


    ]

   users = [
        {
            id: 1,
            name: "Jon Snow",
            email: "jonsnow@gmail.com",
            password: "1234",
            bio: "I've long believed that good food, good eating, is all about risk. Whether we're talking about unpasteurized Stilton, raw oysters or working for organized crime associates, food, for me, has always been an adventure.",
            image: {uri: 'https://robohash.org/Jon Snow'}
        },
        {
            id: 2,
            name: "Atomic Ninja",
            email: "atomicninja@gmail.com",
            password: "4321",
            bio: "I became a chameleon. My color didn't change, but I could change your perception of my color. If you spoke Zulu, I replied to you in Zulu. If you spoke to me in Tswana, I replied to you in Tswana. Maybe I didn't look like you, but if I spoke like you, I was you",
            image: require("../assets/images/ninja.png")
        }
    ]

    static getInstance() {
        if(DataManager.myInstance == null){
            DataManager.myInstance = new DataManager();
        }
        return this.myInstance
    }

    getUsers(){
        return this.users
    }

    getUserID(){
        return this.userID;
    }

    setUserID(id){
        return this.userID = id;
    }

    getListings(){
        return this.initialListings
    }

    addListing(listing){
        this.initialListings.push(listing)
    }

    editListing(listing){
        this.initialListings = this.initialListings.map(obj => {
            if(obj.id === listing.id)
                return listing;
            return obj;
        });
    }

    deleteListing(listing){
        this.initialListings = this.initialListings.filter(item => item.id !== listing.id)
    }

    addUser(newUser){
        this.users.push(newUser)
    }
}