import Description from "./components/description";
import React from 'react'
import Navbar from './components/navbar'
import Home from "./components/home";
import About from './pages/About'
import Movie from './pages/Movie'
import Journal from './pages/Journal'
import MovieDetails from './components/movieDetails';
import SearchResult from './components/searchResult';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import about from './pages/About'
import movie from './pages/Movie'
import journal from './pages/Journal'

function App() {


  return (
    <Router>
      <Navbar/>
      <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/description' element={<Description/>}/>
        <Route path="/movies/:imdbID" element={<MovieDetails/>} />
        <Route path="/search/:input" element={<SearchResult/>} />
        <Route path="/about" element={<About/>}/>
        <Route path="/movie" element={<Movie/>}/>
        <Route path="/journal" element={<Journal/>}/>
   

      </Routes>
      </div>
      
    </Router>
  )
}


export default App;
