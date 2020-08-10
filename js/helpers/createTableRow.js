import {tableBody} from "../script.js"

export function createTableRow({name, flag, nativeName}){
    const newRow = tableBody.insertRow(tableBody.length)

    const nameCell = newRow.insertCell(0)
    const flagCell = newRow.insertCell(1)

    let img = document.createElement("img")
    let countryName = document.createElement("h3")

    countryName.innerText = name;
    nameCell.append(countryName)

    img.src = flag;
    img.classList.add("flag-img")
    flagCell.append(img)

    newRow.classList.add("country")

    return newRow;
}