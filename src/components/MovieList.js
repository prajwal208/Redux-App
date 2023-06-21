import React, { useEffect } from 'react'
import MovieCard from '../components/MovieCard'
import { fetchMovie } from '../features/movieSlice'
import { useDispatch, useSelector } from 'react-redux'
import { fetchSeries } from '../features/movieSlice'
import { getAllMovies } from '../features/movieSlice'
import { getAllSeries } from '../features/movieSlice'

function MovieList() {

    const movies = useSelector(getAllMovies)
    console.log(movies);
    const series = useSelector(getAllSeries)
    const movieText = "batman"
    const seriesText = "Friends"
    const loading = useSelector((state) => state.movies.loading)

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchMovie(movieText))
        dispatch(fetchSeries(seriesText))
    }, [dispatch])


    return (
        <>
                        {loading ? <h1>Loading...</h1>
                        :
                        
                        (
                            <>
                            <h1>Movies</h1>

                            <div className="container">
                                {
                                    movies.Search && movies.Search.map((movie, index) => {
                                        return <MovieCard movie={movie} key={index} />
                                    })
                                }
                            </div>

                            <h1>Series</h1>
                            <div className="container">
                                {
                                    series.Search && series.Search.map((movie, index) => {
                                        return <MovieCard movie={movie} key={index} />
                                    })
                                }
                            </div>
                            </>
                        )}
                    
        </>
    )
}

export default MovieList
