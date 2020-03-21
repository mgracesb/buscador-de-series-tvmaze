'use strict';

const showShows = document.getElementById('showsList');
const favShowList = getFromLocal();


function paintShows(showList) {
  showShows.innerHTML = '';

  for (let show of showList) {
    let showNameOrigin = show.show.name;
    let showsListing = document.createElement('li');
    let showsListingName = document.createElement('h3');
    let showsListingContent = document.createTextNode(showNameOrigin);
    let showIdOrigin = parseInt(show.show.id);
    showsListing.classList.add('showsListing');
    showsListing.setAttribute('id', `${showIdOrigin}`);
    showsListingName.appendChild(showsListingContent);
    showShows.appendChild(showsListing);
    showsListing.appendChild(showsListingName);

    const showImg = show.show.image;

    if (!showImg.medium){
      let showsListingImg = document.createElement('img');
      showsListingImg.src = 'https://via.placeholder.com/210x295/ffffff/666666/?';
      showsListingImg.classList.add('display-image');
      showsListing.appendChild(showsListingImg);

    }else{
      let showsListingImg = document.createElement('img');
      showsListingImg.src = showImg.medium;
      showsListingImg.classList.add('display-image');
      showsListing.appendChild(showsListingImg);
    }
    liListener();
  }
}



function liListener() {
  const showsListLi = document.querySelectorAll('.showsList li');

  for(let showsLi of showsListLi) {
    showsLi.addEventListener('click', selectFavShow);
  }
}

function selectFavShow(evt){
  let favShow = parseInt(evt.currentTarget.id);
  favShowList.push(favShow);

  saveToLocal();
  showFavShows(favShowList);

  let showInfo = getMovieObject(favShow);
  console.log(showInfo);
}

function getMovieObject(id) {
  return showList.find(show => show.id === id);
}


function showFavShows(favArray) {
  let hereFavShows = document.getElementById('favShows');
  hereFavShows.innerHTML = '';

  for (let showSelected of favArray) {
    let thisObject = getMovieObject(showSelected);

    if (showSelected === thisObject.id) {

      let favShowLi = document.createElement('li');
      favShowLi.setAttribute('class', 'favShowLi');
      let favShowName = document.createElement('h4');
      let nameContent = thisObject.name;
      let favShowNameContent = document.createTextNode(nameContent);
      favShowName.appendChild(favShowNameContent);
      let favShowImg = document.createElement('img');
      favShowImg.src = thisObject.image.original;
      hereFavShows.appendChild(favShowLi);
      favShowLi.appendChild(favShowName);
      favShowLi.appendChild(favShowImg);
    }
  }
}