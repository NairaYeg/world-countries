export let favoriteCountries = [];

localStorage.hasOwnProperty("favCountries") ? favoriteCountries = JSON.parse(localStorage.getItem("favCountries")) : localStorage.setItem("favCountries", JSON.stringify(favoriteCountries))

 