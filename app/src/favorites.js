import {createTableRow} from "./render.js"
import {doGet} from "./helpers/request.js"
import {favoriteCountries} from "./render.js"

const tableBody = document.querySelector("tbody")

favoriteCountries.forEach(country => {
     doGet(country.url)
      .then(r => {
        createTableRow(r[0].name, r[0].flag, tableBody)
      })
})


