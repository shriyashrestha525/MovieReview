import React from 'react'
import { useLocation } from 'react-router-dom';
import './description.css';
function Description() {
    const location = useLocation();
    const movie = location.state?.movie;
  return (
    <div className='description'>
      <h1>{movie.Title}</h1>
      <h3>{movie.year}</h3>
      <h3>Directed by Osgood Perkins</h3>
      <p>{movie.Plot}</p>
    </div>
  )
}

export default Description;
