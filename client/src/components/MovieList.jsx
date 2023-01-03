import Movie from './Movie.jsx';
import React from 'react';
import {useState} from 'react';
const MovieList = ({watchClick, movies}) => {

  const [watchedClicked, setWatchedClicked] = useState(false);
  var watchListClicked = function() {
    setWatchedClicked(true);
  }
  var toWatchClicked = function() {
    setWatchedClicked(false)
  }

  return (
  <div>
    <button onClick={watchListClicked}>Watched</button>
    <button onClick={toWatchClicked}>To Watch</button>
    <ul className='movie-list list-group'>
      {watchedClicked ?
      (movies.filter((movie, i) => movie.watched)).map((movie, i) => {
        return (<Movie watchClick={watchClick} key={i} movie={movie}/>)
      })
      :(movies.filter((movie, i) => !movie.watched)).map((movie, i) => {
        return (<Movie watchClick={watchClick} key={i} movie={movie}/>)
      })
      }
    </ul>
  </div>
  )
}
export default MovieList;

