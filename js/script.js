import {doGet} from "./helpers/request.js"
import {BASE_URL} from "./constants/BASE_URL.js"
import {createTableRow} from "./helpers/createTableRow.js"
import {favoriteCountries} from "./constants/favCountries.js"


export const tableBody = document.querySelector("tbody")
const searchInput = document.querySelector("#search-input")

tableBody.innerText = "Loading....."

doGet("https://restcountries.eu/rest/v2/all")
.then(countries => {
    tableBody.innerText = ""
    countries.forEach((country) => {
        createTableRow(country.name, country.flag, tableBody)
    });
})


searchInput.addEventListener("input", (event)=>{
    if(event.target.value.trim() !== ""){
    let countyName = event.target.value
    tableBody.innerText = 'Loading.....'
    doGet(`https://restcountries.eu/rest/v2/name/${countyName}`)
    .then(countries => {
        tableBody.innerText = ""
        countries.forEach(country => {
            createTableRow(country.name, country.flag, tableBody)
        })
    })
    .catch((err) => {
        tableBody.innerText = `${err.message}`
    })
    }
     return ;
})