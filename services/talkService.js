import axios from 'axios'

talkURL = 'https://leaper-backend.herokuapp.com/api/talks'

const createTalk = async (currentUser, { title, body }) => {
    const result = await axios.post(talkURL, {userID: currentUser, title: title, body: body})
    console.log(result)
}

const getTalks = async () => {
    const result = await axios.get(talkURL)
    return result
}

export default {
    createTalk,
    getTalks
}