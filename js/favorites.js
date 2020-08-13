import {createTableRow} from "./helpers/createTableRow.js"
import {favoriteCountries} from "./constants/favCountries.js"
import {doGet} from "./helpers/request.js"

const tableBody = document.querySelector("tbody")

favoriteCountries.forEach(country => {
     doGet(country.url)
      .then(r => {
        createTableRow(r[0].name, r[0].flag, tableBody)
      })
})