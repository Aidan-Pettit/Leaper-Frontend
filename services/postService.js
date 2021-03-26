import axios from 'axios'

const postURL = 'https://leaper-backend.herokuapp.com/api/posts'

const addNewPost = async (userID, base64String) => {
    const post = 'data:image/jpeg;base64,' + base64String
    const result = await axios.put(postURL, {userID: userID, post: post}) 
    console.log(result)
}

export default {
    addNewPost
}