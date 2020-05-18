import React from 'react';
import {Link, useParams} from 'react-router-dom'
import MovieCard from './MovieCard';


const MovieList = props => {
  console.log("props in moviesList", props)
  return (
    <div className="movie-list">
      {props.movies.map(movie => (
        <MovieCard key={movie.id} movie={movie} bool ={false} />
))}
    </div>
  );
}

// function MovieDetails({ movie }) {
//   const params= useParams();
//   console.log('finding key', movie.id);

//   const { title, director, metascore, stars } = movie;
//   return (
//     <div className="movie-card">
//       <Link to={`/movies/${movie.id}`}>
//       <h2>{title}</h2>
//       <div className="movie-director">
//         Director: <em>{director}</em>
//       </div>
//       <div className="movie-metascore">
//         Metascore: <strong>{metascore}</strong>
//       </div>
//       <h3>Actors</h3>

//       {stars.map(star => (
//         <div key={star} className="movie-star">
//           {star}
//         </div>
//       ))}
//       </Link>
//     </div>
//   );
// }

export default MovieList;

