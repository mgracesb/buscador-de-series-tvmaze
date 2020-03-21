'use strict';


const submitButton = document.getElementById('submitButton');
const titleInput = document.getElementById('titleInput');
let apiUrl = 'http://api.tvmaze.com/search/shows?q=';
let showList = null;


function fetchData() {
  const writeHere = titleInput.value;

  fetch(apiUrl+writeHere)
    .then(response => response.json())
    .then(data => {
      showList = data;
      console.dir(showList);
      paintShows(showList);
      // showFavShows(favShowList);
    })
    .catch(function(error) {
      console.log(error);
    });
}

submitButton.addEventListener('click', fetchData);
