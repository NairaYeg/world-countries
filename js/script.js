import {doGet} from "./helpers/request.js"
import {render} from "./helpers/render.js"
import {appendErrorMessage} from "./helpers/throwErrorMessage.js"
import {debounce} from "./helpers/debounce.js"

const tableBody = document.querySelector("tbody")
const searchInput = document.querySelector("#search-input")
const title = document.querySelector("h1")

tableBody.innerText = "Loading....."

doGet("https://restcountries.eu/rest/v2/all")
.then(countries => {
     render(countries, tableBody)
})


function search(event) {
  console.log(event.target.value);
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
        appendErrorMessage(tableBody);
        title.innerText = "We are the one";
      });
  } else {
    doGet("https://restcountries.eu/rest/v2/all").then((countries) => {
      render(countries, tableBody);
    });
  }
}


let effectiveSearch = debounce(search, 500)

searchInput.addEventListener("input", effectiveSearch);
