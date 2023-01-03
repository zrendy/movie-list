import React from 'react';
import MovieList from './MovieList.jsx';
import SearchBar from './SearchBar.jsx';
import InputField from './InputField.jsx'
import {useState} from 'react';


const App = () => {
  var initialMovies = [
    // {title: 'Mean Girls'},
    // {title: 'Hackers'},
    // {title: 'The Grey'},
    // {title: 'Sunshine'},
    // {title: 'Ex Machina'},
  ];
  const [movies, setMovies] = useState(initialMovies)


  var handleSearch = function(entry) {
    var matchingMovies = [];
    movies.forEach(movie => {
      var title = movie.title.toLowerCase();
      if(title.includes(entry)) {
        matchingMovies.push(movie);
      }
    })
    if(matchingMovies.length === 0) {
      alert('no movie found by that name!');
    } else{
      setMovies(matchingMovies);
    }
  }
  var handleInput = function(entry) {
    var newMovie = {title: entry, watched: false};
    var newState = [...movies, newMovie];
    setMovies(newState);
  }
  var watchClick = function(movieTitle){
    var newMovies = movies.slice();
    newMovies.forEach(movie => {
      if(movie.title === movieTitle) {
        movie.watched = !movie.watched;
      }
    })
    setMovies(newMovies);
  }

return (
  <div>
  <h1>MovieList</h1>
  <MovieList watchClick={watchClick} movies={movies} />
  <div id="search"><SearchBar handleSearch={handleSearch}/></div>
  <div id="add-movie"><InputField handleInput={handleInput}/></div>
  </div>
)
}
export default App;