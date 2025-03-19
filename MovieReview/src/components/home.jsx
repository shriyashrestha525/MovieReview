import React from 'react'
import Header from './header';
import { FaApple } from "react-icons/fa";
import { FaAndroid } from "react-icons/fa";
import './home.css'
import MovieCard from './movieCard';
import { useNavigate } from 'react-router-dom';
// f8d83dba

function Home() {

  const movies = [
    { id: 1, title: 'Inception', description: 'A mind-bending thriller.', imageUrl: 'src/assets/inception.jpg' },
    { id: 2, title: 'The Dark Knight', description: 'Batman faces his greatest challenge.', imageUrl: 'src/assets/the dark knight.jpg' },
    { id: 3, title: 'Interstellar', description: 'A journey through space and time.', imageUrl: 'src/assets/interstellar.jpg' },
    { id: 4, title: 'The Matrix', description: 'Reality is not what it seems.', imageUrl: 'src/assets/matrix.jpg' },
    { id: 5, title: 'The Shawshank Redemption', description: 'A man’s journey of survival.', imageUrl: 'src/assets/shawshank.jpg' },
    { id: 6, title: 'Gladiator', description: 'A Roman general seeks revenge.', imageUrl: 'src/assets/gladiator.jpg' },
  ];

  return (
    <div className='home'>
      <Header/>
      <div className="rest">
        <button id='start'>Get started -- it's free</button>
        <p id='des'>The Social Network for Film Lovers. Also available on <FaApple size={25}/><FaAndroid size={25}/></p>
        <div className="cards">
          {movies.map((movie)=>(
            <MovieCard
              key={movie.id}
              title = {movie.title}
              imageUrl = {movie.imageUrl}
            />
          ))}
        </div>

      </div>
    </div>
  )
}

export default Home;
