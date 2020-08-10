import {doGet} from "./helpers/request.js"
import {BASE_URL} from "./helpers/constants.js"
import {createTableRow} from "./helpers/createTableRow.js"

export const tableBody = document.querySelector("tbody")


doGet("https://restcountries.eu/rest/v2/all")
.then(countries => {
    countries.forEach((country) => {
        createTableRow(country)
        console.log(country)
    });
})