import axios from 'axios'

const authURL = 'https://leaper-backend.herokuapp.com/api/auth'

const authUser = async (userInfo) => {
    const response = await axios.post(authURL, userInfo)
    return response.data
}

export default {
    authUser
}