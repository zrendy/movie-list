
var fetchMovies = function(query, callback) {
  fetch('http://www.omdbapi.com/?i=tt3896198&apikey=3f4586f1&' + new URLSearchParams({s:query}), {method: 'GET'})
  .then((response) => response.json())
  .then((data) => {
    if(data.Response === 'False') {
      throw Error('nothing found!')
    } else{
      callback(data);
    }

  })
  .catch((error) => {
    console.log(error);
  })



}
export default fetchMovies;