'use strict';


const showsListUl = document.getElementById('showsList');
let paintFavShowList = document.getElementById('favShows');


////Pinto las series que se obtienen de la búsqueda
function paintShows(showList) {
  showsListUl.innerHTML = '';

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
    showsListUl.appendChild(showsListing);

    showToFavListener();
  }
}


function showToFavListener() {
  const showsListLi = document.querySelectorAll('.showsList li');

  for(let showsLi of showsListLi) {
    showsLi.addEventListener('click', selectFavShow);
  }
}


////Al seleccionar una serie, la guardo tomando como referencia su Id
function selectFavShow(evt){
  const favShowIdClick = parseInt(evt.currentTarget.id);

  let objectId = getObjectById(favShowIdClick);
  let favShowObj = objectId.show;

  favShowList.push(favShowObj);

  saveToLocal();
  paintFavShows(favShowList);
}


function getObjectById(id){
  return showList.find(show => show.show.id === id);
}


////Pinto en la sección de favoritos las series
function paintFavShows(favShowList) {
  paintFavShowList.innerHTML = '';

  for (let favShow of favShowList){
    let favShowList = document.createElement('li');
    let favShowName = document.createElement('h4');
    let favShowImg = document.createElement('img');
    let favShowNameContent = document.createTextNode(`${favShow.name}`);
    let favShowDelete = document.createElement('button');
    let x = document.createTextNode('x');

    favShowDelete.setAttribute('type','button');
    favShowDelete.setAttribute('id',`'${favShow.name}'`);
    favShowDelete.classList.add('deleteButton');
    favShowList.classList.add('favShowLi');
    favShowList.setAttribute('id',`'${favShow.name}'`);
    favShowDelete.appendChild(x);
    favShowList.appendChild(favShowDelete);
    favShowName.appendChild(favShowNameContent);
    favShowList.appendChild(favShowName);

    if(favShow.image !== null){
      favShowImg.src = `${favShow.image.medium}`;
      favShowImg.classList.add('favShowImg');
      favShowList.appendChild(favShowImg);
    }else{
      favShowImg.src = 'https://via.placeholder.com/210x295/ffffff/666666/? text=TV';
      favShowImg.classList.add('favShowImg');
      favShowList.appendChild(favShowImg);
    }

    paintFavShowList.appendChild(favShowList);
    removeFavListener();
  }
}
