import { reactive, readonly } from "vue"
import axios from 'axios'

const defaultState = {
    series: [],    
    serieDetail: {},
    movies: [],
    movieDetail: {},
    isLoading: false,
}
const tmdbConfig = {
    headers: {
        Authorization: 'Bearer ' + import.meta.env.VITE_TMDB_TOKEN
    }
}

const baseUrl = import.meta.env.VITE_BASEURL
const apikey = import.meta.env.VITE_APIKEY

const state = reactive(defaultState)

const actions = {
    getSeries: async (query) => {
        state.isLoading = true
        try {
            const response = await axios.get(`${baseUrl}/tv/${query.category}?apikey=${apikey}&page=${query.page}`,tmdbConfig)
            if (query.page > 1) {
                state.series = [...state.series, ...response.data.results]
            } else {
                state.series = response.data.results
            }
            state.isLoading = false
        } catch (error) {
            console.log(error.response)
            state.isLoading = false
        }
    },
    getMovies: async (query) => {        
        state.isLoading = true
        try {
            const response = await axios.get(`${baseUrl}/movie/${query.category}?apikey=${apikey}&page=${query.page}`,tmdbConfig)
            if (query.page > 1) {
                state.movies = [...state.movies, ...response.data.results]
            } else {
                state.movies = response.data.results
            }
            state.isLoading = false
        } catch (error) {
            console.log(error.response)
            state.isLoading = false
        }
    },
    getSerieDetail: async (id) => {
        state.isLoading = true
        await new Promise(resolve => setTimeout(resolve, 1500))
        try {
            const response = await axios.get(`${baseUrl}/tv/${id}?apikey=${apikey}&append_to_response=images,keywords,content_ratings,credits`,tmdbConfig)
            state.serieDetail = response.data
            state.isLoading = false
        } catch (error) {
            console.log(error.response)
            state.isLoading = false
        }
    },
    getMovieDetail: async (id) => {
        state.isLoading = true
        await new Promise(resolve => setTimeout(resolve, 1500))
        try {
            const response = await axios.get(`${baseUrl}/movie/${id}?apikey=${apikey}&append_to_response=images,keywords,content_ratings,credits`,tmdbConfig)
            state.movieDetail = response.data
            state.isLoading = false
        } catch (error) {
            console.log(error.response)
            state.isLoading = false
        }
    }
}
const getters = {

}

export default () => ({
    ...actions,
    ...getters,
    state: readonly(state)
})