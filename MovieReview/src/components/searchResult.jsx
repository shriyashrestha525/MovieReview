
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const SearchResult = () => {
  const { query } = useParams(); // Get the query from the URL
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(`https://www.omdbapi.com/?s=${query}&apikey=f8d83dba`);
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
  }, [query]); // Re-fetch when query changes

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="search-results">
      <ul>
        {movies.map((movie) => (
          <li key={movie.imdbID}>
            <Link to={`/movies/${movie.imdbID}`}>
              <img src={movie.Poster} alt={movie.Title} width="100" />
              <h3>{movie.Title}</h3>
              <p>{movie.Year}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchResult;

