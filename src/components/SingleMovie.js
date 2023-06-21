import React, { useEffect } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import {getAllMoviesOrShows,deleteMovieOrShow,fetchMoviesOrShows} from '../features/movieSlice'
import {useParams} from 'react-router-dom'



function SingleMovie() {

const {imdbID} = useParams()
const data = useSelector(getAllMoviesOrShows)


const dispatch = useDispatch()

useEffect(() => {
    dispatch(fetchMoviesOrShows(imdbID))
    return(() => {
        dispatch(deleteMovieOrShow())
    })
},[dispatch,imdbID])

    return (
        <>
            {Object.keys(data).length ===0 ? <h1>loading...</h1>:
            
            <div className="details-container" style={{color:"white"}}>
                <div className="details-content">
                    <div className="image-details">
                        <img src={data.Poster} alt="movieorshow"/>
                    </div>
                    <h2>{data.Title}</h2><span>{data.Year}</span>
                    <h4>Director:{data.Director}</h4>
                    <h4>{data.Released}</h4>
                    <h4>{data.Genre}</h4>
                    <p>{data.Plot}</p>
                </div>
            </div>
            }
        </>
    )
}

export default SingleMovie
