import React from 'react'
import Header from './components/Header/Header'
import './App.css'
import Home from './components/Home/Home'
import SingleMovie from './components/SingleMovie'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Cart from './components/Cart'

function App() {
 
  return (
    <>
    
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/movie/:imdbID" element={<SingleMovie/>}/>
        <Route path="/cart" element={<Cart/>}/>
      </Routes>
    </BrowserRouter>
    
    </>
  );
}

export default App;
