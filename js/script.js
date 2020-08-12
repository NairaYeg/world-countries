import {doGet} from "./helpers/request.js"
import {BASE_URL} from "./helpers/constants.js"
import {createTableRow} from "./helpers/createTableRow.js"
import {favoriteCountries} from "./helpers/constants.js"

export const tableBody = document.querySelector("tbody")

tableBody.innerText = "Loading....."

doGet("https://restcountries.eu/rest/v2/all")
.then(countries => {
    tableBody.innerText = ""
    countries.forEach((country) => {
        createTableRow(country)
    });
})
