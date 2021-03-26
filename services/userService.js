import axios from 'axios'

const userURL = 'https://leaper-backend.herokuapp.com/api/users'

const usersURL = 'https://leaper-backend.herokuapp.com/api/users/ids'

const getUsers = async () => {
    const result = await axios.get(userURL)
    console.log(result.data)
    return result.data
}

const getUsersByIDS = async ids => {
    const result = await axios.post(usersURL, {ids: ids})
    return result.data
}

const getUserByID = async userID => {
    const result = await axios.get(userURL, userID)
    return result.data
}

const postUser = async user => {
    const result = await axios.post(userURL, user)
    return result.data
}

const watchUser = async (userID, watchedUserID) => {
    const result = await axios.put(userURL, {userID: userID, watchedUserID: watchedUserID})
    return result.data
}

const deleteUser = async userID => {
    const result = await axios.delete(userURL, userID)
}

export default {
    getUsers,
    getUsersByIDS,
    getUserByID,
    postUser,
    watchUser,
    deleteUser
}