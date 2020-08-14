import {createTableRow} from "./createTableRow.js"

export const  render = (countries, body) =>{
    body.innerText = ""
    countries.forEach((state) => {
    createTableRow(state.name, state.flag, body)
    });
}