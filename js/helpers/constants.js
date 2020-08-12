export const BASE_URL = "https://restcountries.eu/rest/v2";
export let favoriteCountries = [];


if(localStorage.hasOwnProperty("favCountries")){
    favoriteCountries = JSON.parse(localStorage.getItem("favCountries"))
}else{
    localStorage.setItem("favCountries", favoriteCountries)
}


