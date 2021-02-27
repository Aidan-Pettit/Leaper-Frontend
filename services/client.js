import { create } from 'apisauce'

const jsonPlaceholder = 'https://jsonplaceholder.typicode.com/'
const myServer = 'https://localhost:3000/api'

const apiClient = create({
    baseURL: myServer
})

apiClient.get('/courses').then((response) => {
    if (!response.ok)  
        response.problem
})

export default apiClient