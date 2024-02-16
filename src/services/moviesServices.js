import axios from 'axios'
import removeDuplicates from './removeDuplicates'
const baseUrl = 'http://localhost:3700/'

const fetchMoviesByRate = async (rate) => {
    try {
        const response = await axios.get(`${baseUrl}movies`)
        const { data } = response
        const noRepeatedMovies = removeDuplicates(data)
        if (rate) {
            const moviesByRate = noRepeatedMovies.filter(movie => Math.floor(movie.vote_average) === rate)
            console.log(rate);
            console.log(moviesByRate);
            return moviesByRate
        }
        return noRepeatedMovies
    } catch (error) {
        console.error(error)
    }
}

const fetchMoviesBySearch = async (word) => {
    try {
        const response = await axios.get(`${baseUrl}movies`)
        const { data } = response
        const noRepeatedMovies = removeDuplicates(data)
        console.log('fetchMoviesBySearch running!');
        if (word) {
            const normalizedWord = word.normalize('NFD').toLowerCase()
            const movieMatches = noRepeatedMovies.filter(m => {
                const normalizedTitle = m.title.normalize('NFD').toLowerCase();
                return normalizedTitle.startsWith(normalizedWord);
            });
            console.log(movieMatches);
            return movieMatches
        }
        return []
    } catch (error) {
        console.error(error);
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

export { fetchMoviesByRate, fetchMoviesBySearch, getMovieById }