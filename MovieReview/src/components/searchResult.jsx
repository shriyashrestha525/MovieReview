
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import './searchResult.css'

const SearchResult = () => {
  const { input } = useParams(); // Get the query from the URL
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  
  console.log("search data", input);

  useEffect(() => {
    const fetchMovies = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(`https://www.omdbapi.com/?s=${input}&apikey=f8d83dba`);
        const data = await response.json();

        if (data.Response === 'True') {
          setMovies(data.Search);
        } else {
          setError('No movies found');
        }
      } catch (err) {
        setError('Error fetching data');
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, [input]); // Re-fetch when query changes

  if (loading) return <div className='loading'>Loading...</div>;
  if (error) return <div className='error'>{error}</div>;

  return (
    <div className="search-results">
      <ul>
        {movies.map((movie) => (
          <li key={movie.imdbID}>
            <Link to={`/movies/${movie.imdbID}`}>
            <div className='movie-info'>
              <img
                src={movie.Poster === 'N/A' ? 'https://via.placeholder.com/100x150' : movie.Poster}
                width="100"
              />
              <h3 className='movie-title'>{movie.Title}</h3>
              <p>{movie.Year}</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchResult;

