import axios from 'axios';

async function getUsers() {
    const users = await axios.get('https://leaper-backend.herokuapp.com/api/users')
    console.log(users.data)
}

export default getUsers;