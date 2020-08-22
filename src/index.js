import {render} from "./render.js"
import {renderErrorMessage} from "./render.js"
import {doGet} from "./helpers/request.js"
import {debounce} from "./helpers/debounce.js"
import {errorMessages} from "./constants/errorMessages.js"
import {titleText} from "./constants/titleText.js"


const tableBody = document.querySelector("tbody")
const searchInput = document.querySelector("#search-input")
const title = document.querySelector("h1")

tableBody.innerText = "Loading....."

doGet("https://restcountries.eu/rest/v2/all")
.then(countries => {
     render(tableBody, countries)
})
.catch((err)=>{
     renderErrorMessage(tableBody, errorMessages.serverError);
})


function search(event) {
  if (event.target.value.trim() !== "") {
    let countyName = event.target.value;
    tableBody.innerText = "Loading.....";
    title.innerText = "Search....";
    doGet(`https://restcountries.eu/rest/v2/name/${countyName}`)
      .then((countries) => {
        render(tableBody, countries, title, titleText);
      })
      .catch((error) => {
        renderErrorMessage(tableBody, errorMessages.missingSearchResult, title, titleText);
      });
      
  } else {
    doGet("https://restcountries.eu/rest/v2/all").then((countries) => {
      render( tableBody, countries);
    });
  }
}


const effectiveSearch = debounce(search, 500)

searchInput.addEventListener("input", effectiveSearch);
