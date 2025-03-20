import React from 'react'
import Navbar from './components/navbar'
import Home from "./components/home";
import About from './pages/About'
import Movie from './pages/Movie'
import Journal from './pages/Journal'
import MovieDetails from './components/movieDetails';
import SearchResult from './components/searchResult';
import Description from "./components/description";
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <Router>
        <Navbar/>
        <div>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route path="/movies/:imdbID" element={<MovieDetails/>} />
          <Route path="/search/:query" element={<SearchResult/>} />
          <Route path="/about" element={<About/>}/>
          <Route path="/movie" element={<Movie/>}/>
          <Route path="/journal" element={<Journal/>}/>
        </Routes>
          
        </div>
      </Router>
    </div>
    
  )
}

export default App
