import axios from 'axios';

async function printAxiosData() {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users')
    console.log(response.data)
}

export default printAxiosData