import {addItemLocalStorage} from "../localStorage.js"

export let favoriteCountries = [];

localStorage.hasOwnProperty("favoriteCountries") ? favoriteCountries = JSON.parse(localStorage.getItem("favoriteCountries")) : addItemLocalStorage("favoriteCountries", favoriteCountries) 

 