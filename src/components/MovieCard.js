import React from 'react'
import './card.css'
import { Link } from 'react-router-dom'
import {addMovies} from '../features/movieSlice'
import {useDispatch,useSelector} from 'react-redux'



function MovieCard({ movie }) {

const cartItems = useSelector(state => state.movies.cart)


const dispatch = useDispatch()

const addtoCart = (movie) => {
    const isInCart = cartItems.some((item) => item.imdbID === movie.imdbID)
    if(isInCart){
        alert('already in watchlist')
    }else
    dispatch(addMovies(movie))
}

    return (
        <>

            <div className="card-container">
                <Link to={`/movie/${movie.imdbID}`}>
                    <div className="card-contents">
                        <div className="card-box">
                            <div className="image-box">
                                <img src={movie.Poster} alt="movie-images" className="movie-img" />
                            </div>
                            <h2>{movie.Title.slice(0, 20)}</h2>
                            <h3>Release Year: {movie.Year}</h3>
                            <h3>Type: {movie.Type}</h3>

                        </div>
                    </div>
                    </Link>

                    
                    <button onClick={() => addtoCart(movie)}>Add to WatchList</button>
                    
            </div>
         
           
        </>
    )
}

export default MovieCard
