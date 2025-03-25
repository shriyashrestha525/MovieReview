import React, { useState } from 'react'
import { useLocation } from 'react-router-dom';
import './description.css';
function Description() {
    const location = useLocation();
    const movie = location.state?.movie;
    const [isActive, setIsActive] = useState('cast');
   

    


    
    const handleCast = (value)=>{
      setIsActive(value);
    };
  return (
    <div className='description'>
      <img id= 'movieImg'src={movie.Poster} alt="image" />
      <div className="container">
        <div className='head'><span id='movieTitle'>{movie.Title} </span>{movie.Year} Directed by:{movie.Director}</div>
        <p>{movie.Plot}</p>
        <div className="details">
          <div className={`cast ${isActive === 'cast' ? 'active':''}`} onClick={()=>handleCast('cast')}>CAST</div>
          <div className={`award ${isActive === 'award' ? 'active': ''}`}onClick={()=>handleCast('award')}>AWARD</div>
          <div className={`genre ${isActive === 'genre' ? 'active': ''}`} onClick={()=>handleCast('genre')}>GENRE</div>
          <div className={`language ${isActive === 'lang' ? 'active': ''}`} onClick={()=>handleCast('lang')}>LANGUAGE</div>
        </div>
        {isActive==='cast' && (
          <div className="castName" >
            {movie.Actors.split(',').map((actor, index)=>(
              <div key = {index} className='actor'>{actor}</div>
            ))}</div>)}
        {isActive === 'award' && <div className="awardName" >{movie.Awards}</div>}
        {isActive === 'genre' && (
          <div className = 'genreName' >
            {movie.Genre.split(',').map((genre, index)=>(
              <div className='gen'>{genre}</div>
            ))}
          </div>)}
        {isActive === 'lang' && (
          <div className="language" >
            {movie.Language.split(',').map((lang, index)=>(
              <div className="lan">{lang}</div>
            ))}
          </div>)}
      </div>
    </div>
  )
}

export default Description;
