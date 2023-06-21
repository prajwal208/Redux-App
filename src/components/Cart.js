import React from 'react'
import {useSelector} from 'react-redux'

function Cart() {

const movies = useSelector(state => state.movies.cart)

    return (
        <>
         <h1>WatchList</h1> 
         {
             movies.map((movie,index) => {
                return <div className="card-contents" key={index} style={{color:"white"}}>
                <div className="card-box">
                    <div className="image-box">
                        <img src={movie.Poster} alt="movie-images" className="movie-img" />
                    </div>
                    <h2>{movie.Title}</h2>
                    <h3>Release Year: {movie.Year}</h3>
                    <h3>Type: {movie.Type}</h3>

                </div>
            </div> 
             })
         } 
        </>
    )
}

export default Cart
