import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'


const initialState = {
    loading:true,
    data:[],
    dataseries:[],
    dataShowOrSeries:[],
    cart:[],
    error:''
}


export const fetchMovie = createAsyncThunk('fetchingMovies',async(search) => {
    const response = await axios.get(`http://www.omdbapi.com/?apikey=95161d7d&s=${search}&type=movie`)
    const result = response.data
    return result
})


export const fetchSeries = createAsyncThunk('fetchShow',async(search) => {
    const response = await axios.get(`http://www.omdbapi.com/?apikey=95161d7d&s=${search}&type=series`)
    const result = response.data
    return result
})


export const fetchMoviesOrShows = createAsyncThunk('fetchSeriesOrShows',async(id) => {
    const response = await axios.get(`http://www.omdbapi.com/?apikey=95161d7d&i=${id}&plot=full`)
    const result = response.data
    return result
})




const movieSlice = createSlice({
    name:'movies',
    initialState,
    reducers:{
        deleteMovieOrShow:(state) => {
            state.dataShowOrSeries = []
        },
        addMovies(state,action){
            state.cart.push(action.payload)
        }
    },
    extraReducers:(builder) => {
        builder.addCase(fetchMovie.pending,(state) => {
            state.loading=true
        })
        builder.addCase(fetchSeries.pending,(state) => {
            state.loading=true
        })
        builder.addCase(fetchMoviesOrShows.pending,(state) => {
            state.loading=true
        })
        builder.addCase(fetchMovie.fulfilled,(state,action) => {
            state.loading=false
            state.data = action.payload
            state.error = ''
        })
        
        builder.addCase(fetchMovie.rejected,(state,action) => {
            state.loading=false
            state.data = []
            state.error = action.error.message
        })
        builder.addCase(fetchSeries.fulfilled,(state,action) => {
            state.loading=false
            state.dataseries = action.payload
            state.error = ''
        })
        builder.addCase(fetchMoviesOrShows.fulfilled,(state,action) => {
            state.loading=false
            state.dataShowOrSeries = action.payload
            state.error = ''
        })
    }
})


export const {deleteMovieOrShow,addMovies} = movieSlice.actions
export const getAllMovies = (state) => state.movies.data
export const getAllSeries = (state) => state.movies.dataseries
export const getAllMoviesOrShows = (state) => state.movies.dataShowOrSeries
export default movieSlice.reducer
