import {addItemToLocalStorage} from "../helpers/localStorage.js"
import {getItemFromLocalStorage} from "../helpers/localStorage.js"

export function getFavoriteCountries(){ 
    return localStorage.hasOwnProperty("favoriteCountries") ? getItemFromLocalStorage("favoriteCountries") : addItemToLocalStorage("favoriteCountries", []) 
}

