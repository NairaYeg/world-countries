import {createTableRow} from "./helpers/createTableRow.js"
import {favoriteCountries} from "./constants/favCountries.js"
import {doGet} from "./helpers/request.js"
import {debounce} from "./helpers/debounce.js"
import {appendErrorMessage} from "./helpers/throwErrorMessage.js"
import {render} from "./helpers/render.js"

const searchInput = document.querySelector("#search-input")
const title = document.querySelector("h1")
const tableBody = document.querySelector("tbody")

favoriteCountries.forEach(country => {
     doGet(country.url)
      .then(r => {
        createTableRow(r[0].name, r[0].flag, tableBody)
      })
})



// let effectiveSearch = debounce(search, 1000)

// searchInput.addEventListener("input", effectiveSearch);