'use strict';


const submitButton = document.getElementById('submitButton');
const titleInput = document.getElementById('titleInput');
let apiUrl = 'http://api.tvmaze.com/search/shows?q=';
let showList = null;
const favShowList = getFromLocal();


function fetchData() {
  const writeHere = titleInput.value;

  fetch(apiUrl+writeHere)
    .then(response => response.json())
    .then(data => {
      showList = data;

      paintShows(showList);
      paintFavShows(favShowList);
    })
    .catch(function(error) {
      console.log(error);
    });
}

submitButton.addEventListener('click', fetchData);
