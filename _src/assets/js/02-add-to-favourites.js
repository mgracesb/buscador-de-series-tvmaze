'use strict';

const showShows = document.getElementById('showsList');
let hereFavShows = document.getElementById('favShows');
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
    let image = show.show.image;


    if(image !== null){
      let showImage = document.createElement('img');
      showImage.src = `${image.medium}`;
      showsListing.appendChild(showImage);
    }else if(image === null){
      let showImage = document.createElement('img');
      showImage.src = 'https://via.placeholder.com/210x295/ffffff/666666/? text=TV';
      showsListing.appendChild(showImage);
    }

    showsListingName.appendChild(showsListingContent);
    showsListing.appendChild(showsListingName);
    showShows.appendChild(showsListing);

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
}

function getMovieObject(id) {
  return showList.find(show => show.id === id);
}


function showFavShows(favArray) {
  hereFavShows.innerHTML = '';
  for (let showSelected of favArray) {
    
    let thisObject = getMovieObject(showSelected);
    
    if (showSelected === thisObject.show.id) {
      let favShowLi = document.createElement('li');
      favShowLi.setAttribute('class', 'favShowLi');
      let favShowName = document.createElement('h4');
      let nameContent = thisObject.show.name;
      let favShowNameContent = document.createTextNode(nameContent);
      favShowName.appendChild(favShowNameContent);
      let favShowImg = document.createElement('img');
      favShowImg.src = thisObject.show.image.medium;
      hereFavShows.appendChild(favShowLi);
      favShowLi.appendChild(favShowName);
      favShowLi.appendChild(favShowImg);
    }
  }
}