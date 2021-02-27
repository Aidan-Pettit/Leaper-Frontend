import axios from 'axios';

function printAxiosData() {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users')
    console.log(response.data)
}

export default printAxiosData