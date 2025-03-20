/*import React, { useState } from 'react'
import logo from '../assets/logo.png'
import { Link, useNavigate } from 'react-router-dom'
import { FaSearch } from "react-icons/fa";
import './navbar.css'

const navbar = () => {
  const [query, setQuery] = useState('');// To store the search query
  const navigate=useNavigate();
  const [movies, setMovies] = useState([]); // To store the fetched movie results
  const [loading, setLoading] = useState(false); // To handle loading state
  const [error, setError] = useState(null); // To handle errors

  const fetchMovies= async(searchQuery)=>{
    if(searchQuery==='')return;
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(`https://www.omdbapi.com/?s=${searchQuery}&apikey=f8d83dba`);

      // Check if the response is okay (status 200)
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }

      const data = await response.json();

      if (data.Response === 'True') {
        setMovies(data.Search); // Set the movie results if the response is successful
      } else {
        setError('No results found');
      }
    } catch (err) {
      setError('Error fetching data');
    } finally {
      setLoading(false); // Set loading to false once the request completes
    }
  };


  const handleSearch = () => {
    fetchMovies(query);
    if (query) {
      navigate('/searchresults'); // Navigate to search results page after search
    }
    
  };
  
  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };
  /*
  const handleMovieClick = (imdbID) => {
    // Navigate to the movie details page using the imdbID
    navigate(`/movies/${imdbID}`);
  };*/


  /*
  
  return (
    

    <div className='nav-container'>
      <img className='logo' src={logo} alt='Movie-logo' />
      <div className='nav-list'>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/movie'>Movies</Link></li>
          <li><Link to='/about'>About</Link></li>
          <li> <Link to='/journal'>Journal</Link></li>
        </ul>
      </div>
      <div className='search'>
        <input className='search-box' type="text" placeholder='search for movies' value={query} onChange={handleInputChange}/>
        <button className='search-btn' onClick={handleSearch}><FaSearch /></button>
      </div>
      {error && <p style={{ color: 'red' }}>{error}</p>} 
      {movies.length > 0 && (
        <div className="search-results">
          <ul>
            {movies.map((movie) => (
              <li key={movie.imdbID} onClick={() => handleMovieClick(movie.imdbID)}>
                <img src={movie.Poster} alt={movie.Title} width="100" />
                <h3>{movie.Title}</h3>
                <p>{movie.Year}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>

  )
}

export default navbar
**/
// Navbar.js
import React, { useState } from 'react';
import logo from '../assets/logo.png'
import { Link, useNavigate } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';
import './navbar.css';

const navbar = () => {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  // Handle Search and Navigate to SearchResult page
  const handleSearch = () => {
    if (query) {
      navigate(`/search/${query}`); // Navigate to the search results page with the search query in the URL
    }
  };

  /*return (
    <div className='nav-container'>
      <div className='search'>
        <input
          className='search-box'
          type="text"
          placeholder='Search for movies'
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button className='search-btn' onClick={handleSearch}>
          <FaSearch />
        </button>
      </div>
    </div>
  );
};

export default Navbar;*/
return (
    

  <div className='nav-container'>
    <img className='logo' src={logo} alt='Movie-logo' />
    <div className='nav-list'>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/movie'>Movies</Link></li>
        <li><Link to='/about'>About</Link></li>
        <li> <Link to='/journal'>Journal</Link></li>
      </ul>
    </div>
    <div className='search'>
      <input className='search-box' type="text" placeholder='search for movies' value={query} onChange={(e) => setQuery(e.target.value)}/>
      <button className='search-btn' onClick={handleSearch}><FaSearch /></button>
    </div>
    
    
  </div>

)
}
export default navbar
