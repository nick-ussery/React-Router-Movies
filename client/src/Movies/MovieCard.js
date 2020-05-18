import React from 'react';
import {Link} from 'react-router-dom';


const MovieCard = movie => {
  // console.log('moviecard movie', movie);
  
  const saveMovie = () => {
    // console.log("button works on level 1");
    const addToSavedList = movie.addToSavedList;
    addToSavedList(movie.movie)
    
  }

  const handleEvent = event=>{
    console.log("i was clicked")
  }

  const { title, director, metascore, stars } = movie.movie;
  
  if(movie.bool){

  return (
    <div className="movie-card">
      <Link to={`/movies/${movie.movie.id}`}>
      <h2>{title}</h2>
      <div className="movie-director">
        Director: <em>{director}</em>
      </div>
      <div className="movie-metascore">
        Metascore: <strong>{metascore}</strong>
      </div>
      <h3>Actors</h3>

      {stars.map(star => (
        <div key={star} className="movie-star">
          {star}
        </div>
      ))}
      </Link>
      <div className="save-button" onClick={saveMovie}>Save</div>
    </div>
  )}else{
    return(
    <div className="movie-card">
      <Link to={`/movies/${movie.movie.id}`}>
      <h2>{title}</h2>
      <div className="movie-director">
        Director: <em>{director}</em>
      </div>
      <div className="movie-metascore">
        Metascore: <strong>{metascore}</strong>
      </div>
      <h3>Actors</h3>

      {stars.map(star => (
        <div key={star} className="movie-star">
          {star}
        </div>
      ))}
      </Link>
      {/* <div className="save-button" onClick={saveMovie}>Save</div> */}
    </div>
    )}
};



export default MovieCard;