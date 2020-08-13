import {favoriteCountries} from "./constants/favCountries.js"

export  function addItemLocalStorage () {
      localStorage.setItem("favCountries", JSON.stringify(favoriteCountries))
        return;
}

export function deleteItemFromLocalStorage (countryName) {
         for(let i = 0; i < favoriteCountries.length; i++ ){
             if(favoriteCountries[i].name === countryName) {
              favoriteCountries.splice(i, 1);
              localStorage.setItem("favCountries", JSON.stringify(favoriteCountries))
             }
         }
         return;
}

