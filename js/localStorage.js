import {favoriteCountries} from "./constants/favCountries.js"

export  function addItemLocalStorage (key, value) {
      localStorage.setItem(key, JSON.stringify(value))
        return;
}

export function removeFromFavorites(countryName) {
         for(let i = 0; i < favoriteCountries.length; i++ ){
             if(favoriteCountries[i].name === countryName) {
              favoriteCountries.splice(i, 1);
             }
         }
         addItemLocalStorage("favoriteCountries",favoriteCountries)
         return;
}

