import axios from 'axios'

const ccURL = 'https://leaper-backend.herokuapp.com/api/cc'

const saveCCInfo = async (number, expiryDate, secret) => {
    const result = await axios.post(ccURL, {number, expiryDate, secret})
    return result.data
}

export default {
    saveCCInfo
}