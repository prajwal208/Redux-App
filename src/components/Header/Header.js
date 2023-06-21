import React,{useState} from 'react'
import './header.css'
import logo from '../../images/userlogo.png'
import {Link} from 'react-router-dom'
import {fetchMovie,fetchSeries} from '../../features/movieSlice'
import {useDispatch,useSelector} from 'react-redux'


export default function Header() {

const [search,setSearch] = useState("")

const cart = useSelector(state => state.movies.cart)

const dispatch = useDispatch()

const submitHandler = (e) => {
    e.preventDefault()
    if(search === '') return alert('Enter the text')
    dispatch(fetchMovie(search))
    dispatch(fetchSeries(search))
    setSearch("")
}

    return (
        <>
        <nav className="header-nav">
            <header>
                <h2>Redux Movie App</h2>
            </header>
            <ul>
                <form onSubmit={submitHandler}>
                    <input type="text" placeholder="Search..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}/>
                    <button className="btn-search">search</button>
                </form>
                <Link to={"/"}>
                <li>Home</li>
                </Link>
                
                <li>About</li>
                <Link to={"/cart"}>
                <li>Watchlist {cart.length}</li>
                </Link>
                <img src={logo} alt="user-logo" className="logo"/>
                
            </ul>
        </nav>
        </>
    )
}
