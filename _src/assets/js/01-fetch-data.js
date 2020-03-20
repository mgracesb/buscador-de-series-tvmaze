'use strict';


const submitButton = document.getElementById('submitButton');
const apiUrl = 'http://api.tvmaze.com/shows';
let movieList = null;


function fetchData() {
  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      movieList = data;
      //   console.dir(movieList);
      paintMovies(movieList);
    })
    .catch(function(error) {
      console.log(error);
    });
}



submitButton.addEventListener('click', fetchData);
