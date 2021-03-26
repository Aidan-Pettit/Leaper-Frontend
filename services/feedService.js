import axios from 'axios';

feedURL = 'https://leaper-backend.herokuapp.com/api/feed/'

const getTalkFeed = async userID => {
    const feed = await axios.post(feedURL + 'talks', { userID: userID })
    return feed.data
}

export default {
    getTalkFeed
}