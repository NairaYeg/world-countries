import {addItemLocalStorage} from "../helpers/localStorage.js"

export function getFavoriteCountries(){
    return localStorage.hasOwnProperty("favoriteCountries") ? JSON.parse(localStorage.getItem("favoriteCountries")) : addItemLocalStorage("favoriteCountries", []) 
}

