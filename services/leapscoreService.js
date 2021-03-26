import axios from 'axios';

const leapscoreURL = 'https://leaper-backend.herokuapp.com/api/'

const like = async (userID, talkID) => {
    const result = await axios.post(leapscoreURL + 'like', {userID, talkID})
    return result.data
}

const love = async (userID, talkID) => {
    const result = await axios.post(leapscoreURL, + 'love', {userID, talkID})
    return result.data
}

export default {
    like,
    love
}