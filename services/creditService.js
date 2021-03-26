import axios from 'axios'

const creditURL = 'https://leaper-backend.herokuapp.com/api/credit'

const getUserCredit = async userID => {
    const result = await axios.put(creditURL, {userID})
    return result.data
}

const buyCredit = async (userID, creditValue, price) => {
    const result = await axios.post(creditURL, {userID, creditValue, price})
    return result.data
}

export default {
    getUserCredit,
    buyCredit
}