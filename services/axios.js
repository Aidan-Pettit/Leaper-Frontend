import axios from 'axios'

const getUsers = async () => {
    const result = await axios.get('https://jsonplaceholder.typicode.com/users')
    return result
}

const getPhotos = async () => {
    const result = await axios.get('https://jsonplaceholder.typicode.com/photos')
    return result
}

export default {
    getUsers,
    getPhotos
}