import axios from 'axios'

const locationURL = 'https://leaper-backend.herokuapp.com/api/location'

const saveLocation = async (userID, latitude, longitude) => {
    console.log({latitude, longitude})
    const result = await axios.put(locationURL, {userID, latitude, longitude})
    return result.data    
}

export default {
    saveLocation
}