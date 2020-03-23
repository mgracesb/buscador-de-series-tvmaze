'use strict';


function removeFavListener(){
  const removeShowListener = document.querySelectorAll('.deleteButton');

  for(let removeShow of removeShowListener){
    removeShow.addEventListener('click', removeFavShow);
  }
}


////Elimino de favoritos y lo guardo en LocalStorage
function removeFavShow(evt){
  const removeButtonId = evt.target.id;
  const removeThisLi = document.querySelectorAll('.favShows li');

  for(let removeThis of removeThisLi) {
    let removeThisById = removeThis.id;

    if(removeThisById === removeButtonId){
      removeThis.remove();

      const removeFromFavArray = favShowList.indexOf(removeThisById);
      favShowList.splice(removeFromFavArray);

      saveToLocal();
    }
  }
}