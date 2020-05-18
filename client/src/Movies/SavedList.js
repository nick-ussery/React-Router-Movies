import React from 'react';
import {NavLink} from 'react-router-dom';


const SavedList = props => {
  console.log("props given to savedlist", props)

  return(
  <div className="saved-list">
    <h3>Saved Movies:</h3>
    {props.list.map(movie => (
      <NavLink to={`/movies/${movie.id}`}><span key={movie.id} className="saved-movie">{movie.title}</span></NavLink>
    ))}
    <div className="home-button"><NavLink to="/">>Home</NavLink></div>
  </div>
  )
    };

export default SavedList;
