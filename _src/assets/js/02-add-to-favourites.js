'use strict';

const titleInput = document.getElementById('titleInput');
const showMovies = document.getElementById('moviesList');


function paintMovies(movieList) {
  let movieName = titleInput.value;

  for (let movie of movieList) {
    if(movieName === movie.name) {
      let moviesListing = document.createElement('li');
      let moviesListingContent = document.createTextNode(movieName);
      moviesListing.classList.add('moviesListing');
      moviesListing.setAttribute('id',`${movieName}`);

      moviesListing.appendChild(moviesListingContent);
      showMovies.appendChild(moviesListing);

      let moviesListingImg = document.createElement('img');
      moviesListingImg.src = movie.image.original;
      moviesListingImg.classList.add('display-image');

      moviesListing.appendChild(moviesListingImg);

      liListener();
    }
  }
}

function liListener() {
  const moviesListLi = document.querySelectorAll('.moviesList li');

  for(let moviesLi of moviesListLi){
    moviesLi.addEventListener('click', selectFavMovie);
  }
}


function selectFavMovie(evt){
  const selectMovie = evt.currentTarget.id;
  moviesLi.classList.add('selectedMovie');
  if(selectMovie !== '' || null){

  }
}

