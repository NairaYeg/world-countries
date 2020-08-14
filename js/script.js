import {doGet} from "./helpers/request.js"
// import {BASE_URL} from "./constants/BASE_URL.js"
// import {createTableRow} from "./helpers/createTableRow.js"
// import {favoriteCountries} from "./constants/favCountries.js"
import {render} from "./helpers/render.js"
import {createErrorMessage} from "./helpers/errorMessage.js"

const tableBody = document.querySelector("tbody")
const searchInput = document.querySelector("#search-input")
const title = document.querySelector("h1")

tableBody.innerText = "Loading....."

doGet("https://restcountries.eu/rest/v2/all")
.then(countries => {
     render(countries, tableBody)
})


searchInput.addEventListener("input", (event) => {
    if (event.target.value.trim() !== "") {
      let countyName = event.target.value;
      tableBody.innerText = "Loading.....";
      title.innerText = "Search....";
      doGet(`https://restcountries.eu/rest/v2/name/${countyName}`)
        .then((countries) => {
          render(countries, tableBody);
          title.innerText = "We are the one";
        })
        .catch((error) => {
          createErrorMessage(tableBody);
          title.innerText = "We are the one";
        });
    } else {
      doGet("https://restcountries.eu/rest/v2/all").then((countries) => {
        render(countries, tableBody);
      });
    }
  });
  