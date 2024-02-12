import axios from 'axios'
const baseUrl = 'http://localhost:3700/'

const getAllMovies = async () => {
    try {
        const response = await axios.get(`${baseUrl}movies`)
        const { data } = response
        console.log(data);
        return data
    } catch (error) {
        console.error(error)
    }
}

export default getAllMovies