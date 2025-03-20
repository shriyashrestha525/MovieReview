// MovieDetails.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const MovieDetails = () => {
  const { imdbID } = useParams(); // Extract imdbID from the URL
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

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="movie-details">
      <h1>{movieDetails.Title}</h1>
      <img src={movieDetails.Poster} alt={movieDetails.Title} />
      <p><strong>Plot:</strong> {movieDetails.Plot}</p>
      <p><strong>Year:</strong> {movieDetails.Year}</p>
      <p><strong>Genre:</strong> {movieDetails.Genre}</p>
      <p><strong>Director:</strong> {movieDetails.Director}</p>
      <p><strong>Actors:</strong> {movieDetails.Actors}</p>
      {/* Display more movie details as needed */}
    </div>
  );
};

export default MovieDetails;
