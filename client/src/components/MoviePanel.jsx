import React from 'react';

const MoviePanel = ({panel}) => {
  console.log(panel);
  return(
  <div>
    <ul>
    {panel?.Search.map((movie, i) => {
      return (<li key={i}>{movie.Title}
      <ul>
        <li>{movie.Year}</li>
        <img src={movie.Poster}></img>
      </ul>
      </li>)
      })}
    </ul>
  </div>
  );
}
export default MoviePanel;