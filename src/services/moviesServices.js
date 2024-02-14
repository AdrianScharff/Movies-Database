import axios from 'axios'
import removeDuplicates from './removeDuplicates'
const baseUrl = 'http://localhost:3700/'

const getAllMovies = async () => {
    try {
        const response = await axios.get(`${baseUrl}movies`)
        const { data } = response
        const noRepeatedMovies = removeDuplicates(data)
        console.log(noRepeatedMovies);
        return noRepeatedMovies
    } catch (error) {
        console.error(error)
    }
}

const getMovieById = async (id) => {
    try {
        const response = await axios.get(`${baseUrl}movies/${id}`)
        const { data } = response
        return data
    } catch (error) {
        console.error(error);
    }
}

export { getAllMovies, getMovieById }