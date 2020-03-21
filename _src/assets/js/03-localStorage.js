'use strict';


function saveToLocal(){
  localStorage.setItem('selectedShows', JSON.stringify(favShowList));
  console.dir(favShowList)
}

function getFromLocal(){
  let localInfo = JSON.parse(localStorage.getItem('selectedShows'));

  if (localInfo !== null){
    return localInfo;
  }else{
    return (localInfo = []);
  }
}