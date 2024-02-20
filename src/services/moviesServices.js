import axios from 'axios'
import removeDuplicates from './removeDuplicates'
const baseUrl = 'http://localhost:3700/'

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
            console.log(`This is fetchMoviesBySearch function, word: ${word}`);
            console.log('This is fetchMoviesBySearch function, movieMatches:');
            console.log(movieMatches);
            return movieMatches
        }
        return []
    } catch (error) {
        console.error(error);
    }
}

const fetchMoviesByRate = async (rate) => {
    try {
        const response = await axios.get(`${baseUrl}movies`)
        const { data } = response
        const noRepeatedMovies = removeDuplicates(data)
        if (rate) {
            const moviesByRate = noRepeatedMovies.filter(movie => Math.floor(movie.vote_average) === rate)
            console.log(`This is fetchMoviesByRate function, rate: ${rate}`);
            console.log('This is fetchMoviesByRate function, moviesByRate:');
            console.log(moviesByRate);
            return moviesByRate
        }
        return noRepeatedMovies
    } catch (error) {
        console.error(error)
    }
}

const fetchMoviesByPopularity = async (popularity) => {
    try {
        const response = await axios.get(`${baseUrl}movies`)
        const { data } = response
        const noRepeatedMovies = removeDuplicates(data)
        let moviesByPopularity = []
        if (popularity) {
            switch (popularity) {
                case "0-40":
                    moviesByPopularity = noRepeatedMovies.filter(movie => movie.popularity > 0 && movie.popularity <= 40)
                    break;
                case "40-120":
                    moviesByPopularity = noRepeatedMovies.filter(movie => movie.popularity > 40 && movie.popularity <= 120)
                    break;
                case "120-500":
                    moviesByPopularity = noRepeatedMovies.filter(movie => movie.popularity > 120 && movie.popularity <= 500)
                    break;
                case "500-1000":
                    moviesByPopularity = noRepeatedMovies.filter(movie => movie.popularity > 500 && movie.popularity <= 1000)
                    break;
                case "1000 +":
                    moviesByPopularity = noRepeatedMovies.filter(movie => movie.popularity > 1000)
                    break;
                default:
                    moviesByPopularity = []
                    break;
            }
            console.log(`This is fetchMoviesByPopularity function, popularity: ${popularity}`);
            console.log('This is fetchMoviesByPopularity function, moviesByPopularity:');
            console.log(moviesByPopularity);
            return moviesByPopularity
        }
        return []
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

export { fetchMoviesBySearch, fetchMoviesByRate, fetchMoviesByPopularity, getMovieById }