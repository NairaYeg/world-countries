import {doGet} from "./helpers/request.js"
import {render} from "./render.js"
import {renderErrorMessage} from "./render.js"
import {debounce} from "./helpers/debounce.js"


const tableBody = document.querySelector("tbody")
const searchInput = document.querySelector("#search-input")
export const title = document.querySelector("h1")

tableBody.innerText = "Loading....."

doGet("https://restcountries.eu/rest/v2/all")
.then(countries => {
     render(countries, tableBody)
})
.catch((err)=>{
  tableBody.innerText = "";
  let errorMessage = "Oops!!!! Something has gone wrong..."
  renderErrorMessage(tableBody, errorMessage);
})


function search(event) {
  console.log(event.target.value);
  if (event.target.value.trim() !== "") {
    let countyName = event.target.value;
    tableBody.innerText = "Loading.....";
    title.innerText = "Search....";
    doGet(`https://restcountries.eu/rest/v2/name/${countyName}`)
      .then((countries) => {
        render(countries, tableBody, "We are the one");
        // title.innerText = "We are the one";
      })
      .catch((error) => {
        tableBody.innerText = "";
        let errorMessage = "You just got an error 404, congratulations !!!!!"
        renderErrorMessage(tableBody, errorMessage,"We are the one" );
        // title.innerText = "We are the one";
      });
      
  } else {
    doGet("https://restcountries.eu/rest/v2/all").then((countries) => {
      render(countries, tableBody);
    });
  }
}


const effectiveSearch = debounce(search, 500)

searchInput.addEventListener("input", effectiveSearch);
