import {getItemFromSessionStorage} from "./helpers/sessionStorage.js" 
import {BASE_URL} from "./constants/api.js"
import {doGet} from "./helpers/request.js"
import {createTableRow} from "./render.js"

const body = document.querySelector("tbody")
const title = document.querySelector("title")

let currentCountry = getItemFromSessionStorage("currentCountry")
let currentCountryURL = BASE_URL + `/name/${currentCountry}`

title.innerText = currentCountry

doGet(currentCountryURL)
 .then(r => {
    let country = r[0]
    let name = r[0].name
    let flag = r[0].flag
    createTableRow(name, flag, body, country)
 })
