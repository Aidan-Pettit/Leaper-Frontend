import axios from 'axios'

friendsURL = 'https://leaper-backend.herokuapp.com/api/'

const sendFriendRequest = async (userID, friendUserID) => {
    const result = await axios.put(friendsURL + 'friendRequests', {userID: userID, friendUserID: friendUserID})
    return result.data
}

const acceptFriendRequest = async (userID, friendUserID) => {
    const result = await axios.put(friendsURL + 'friends', {userID: userID, friendUserID})
    return result.data
}

export default {
    sendFriendRequest,
    acceptFriendRequest
}