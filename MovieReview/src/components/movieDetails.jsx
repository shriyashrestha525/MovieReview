// MovieDetails.js
import React, { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import './movieDetails.css';

const MovieDetails = () => {
  const { imdbID: paramImdbID } = useParams(); 
  const location = useLocation();
  const id = location.state?.id;
  const  imdbID = id || paramImdbID;
  const [backgroundImage, setBackgroundImage] = useState('');
  const [movieDetails, setMovieDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(`https://www.omdbapi.com/?i=${imdbID}&apikey=f8d83dba`);
        const data = await response.json();

        if (data.Response === 'True') {
          setMovieDetails(data);

          const tmdbId = data.imdbID;
          const tmdbResponse = await fetch(`https://api.themoviedb.org/3/movie/${tmdbId}?api_key=fe564c6eea648d98accc5cedf4d3ad2e`);
          const tmdbData = await tmdbResponse.json();
          if (tmdbData.backdrop_path) {
            setBackgroundImage(`https://image.tmdb.org/t/p/w1280${tmdbData.backdrop_path}`);
          }

        } else {
          setError('Movie not found');
        }
      } catch (err) {
        setError('Error fetching movie details');
      } finally {
        setLoading(false);
      }
    };

    fetchMovieDetails();
  }, [imdbID]); // Re-fetch when imdbID changes

  if (loading) return <div className='loading'>Loading...</div>;
  if (error) return <div className='error'>{error}</div>;

  return (
    <div className="movie-details-container"
      style={{
        backgroundImage: `radial-gradient(ellipse , rgba(0, 0, 0, 0) 40%, rgba(0, 0, 0, 0.8) 80%),url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '20px',
        color: 'white',
      }}>
      <div className='movie-details'>
        <div className='heading'>
          <h1>{movieDetails.Title}</h1>
          <img src={movieDetails.Poster} alt={movieDetails.Title} id='movie-poster' />
        </div>
        <div className='body'>
          <p><strong>Plot:</strong> {movieDetails.Plot}</p>
          <p><strong>Year:</strong> {movieDetails.Year}</p>
          <p><strong>Genre:</strong> {movieDetails.Genre}</p>
          <p><strong>Director:</strong> {movieDetails.Director}</p>
          <p><strong>Actors:</strong> {movieDetails.Actors}</p>
          {/* Display more movie details as needed */}
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
