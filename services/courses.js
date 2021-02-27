import apiClient from './client'

const jsonEndpoint = '/users'
const coursesEndpoint = '/products'

const getCourses = async () => {
    try {
        const result = await apiClient.get(coursesEndpoint)
        console.log('Succesully retrieved data!')
        console.log(result)
        return result
    } catch (error) {
        console.log('Something went wrong: ', error)
    }
} 

export default {
    getCourses
}