import React from 'react'
import './movieCard.css'
import { useNavigate } from 'react-router-dom';
function MovieCard(props) {
  const navigate = useNavigate();

    const handleClick = (title)=>{
        console.log(title);
        fetch(`https://www.omdbapi.com/?t=${title}&apikey=f8d83dba`)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                navigate('/description', {state:{movie: data}});
                
            })
            .catch(error => console.log(error))
           
    }
  return (
    <div className='card' onClick={()=>handleClick(props.title)} >
      <img id = 'movieCard' src={props.imageUrl} alt="image" />
      <h4>{props.title}</h4>
    </div>
  )
}

export default MovieCard;
