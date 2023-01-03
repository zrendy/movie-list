import React from 'react';
import MoviePanel from './MoviePanel.jsx';
import fetchMovies from '../fetchMovies.js';
import {useState, useEffect} from 'react';
const Movie = ({watchClick, movie}) => {

  const [panelClicked, setPanelClicked] = useState(false);
  const [panel, setPanel] = useState(null);

  var handlePanelClick = function() {
    console.log('clicked')
    setPanelClicked((previousState)=> !previousState);
  }

  useEffect(() => {
    fetchMovies(movie.title, function(data) {
      if(data){
        setPanel(data);
      }

    })
  },[])





  return(
  <div>
    <li onClick ={handlePanelClick}>{movie.title}
    <button className={movie.watched ? 'watched-button' : 'towatch-button'} onClick={()=> {
      watchClick(movie.title);
    }}>WATCHED
    </button>

    {panelClicked && <MoviePanel panel={panel}/>}

    </li>
  </div>
  );
}
export default Movie;