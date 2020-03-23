'use strict';


function removeFavListener(){
  const removeShowListener = document.querySelectorAll('.deleteButton');

  for(let removeShow of removeShowListener){
    removeShow.addEventListener('click', removeFavShow);
  }
}


function removeFavShow(){
  const removeThisShow = document.querySelectorAll('.favShowLi');

  for (let show of removeThisShow){
    show.parentNode.removeChild(show);
  }
}