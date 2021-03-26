import axios from 'axios'

const tokenURL = 'https://leaper-backend.herokuapp.com/api/tokens'

const buyToken = async (userID, creditValue) => {
    const result = await axios.post(tokenURL, {userID, creditValue})
    return result.data
}

export default {
    buyToken
}