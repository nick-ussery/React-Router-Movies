import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {Route, Link} from 'react-router-dom';
import SavedList from './Movies/SavedList';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie';

const App = () => {
  const [savedList, setSavedList] = useState([]);
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const getMovies = () => {
      axios
        .get('http://localhost:5000/api/movies')
        .then(response => {
          console.log('response', response)
          setMovieList(response.data);
        })
        .catch(error => {
          console.error('Server Error', error);
        });
    }
    getMovies();
  }, []);

  const addToSavedList = movie => {
    // console.log("button works on lvl 2");
    const check = savedList.filter((original)=>{
      console.log('original movie', original)
      console.log('checked move', movie)
      return (movie.id === original.id)
    })

    console.log('checked', check);
    if(savedList.length == 0){
    setSavedList([...savedList, movie]);
    }else if(check.length !== 0){
      console.log("movie already in saved list")
    }else{
      setSavedList([...savedList, movie]);
    }
  };

  return (
    <div>
      <SavedList list={savedList} />
      <Route exact path ='/'>
        <MovieList movies={movieList} />
      </Route>
      <Route path='/movies/:id'>
          <Movie id={movieList.id} addToSavedList={addToSavedList} />
      </Route>
    </div>
  );
};

export default App;
