import {tableBody} from "../script.js"
// import {bookmarkIcon} from "../script.js"


export function createTableRow({name, flag, nativeName}){
    const newRow = tableBody.insertRow(tableBody.length)

   
    const nameCell = newRow.insertCell(0)
    const flagCell = newRow.insertCell(1)

    let bookmarkIcon = document.createElement("i")
    let img = document.createElement("img")
    let countryName = document.createElement("h3")
    
    countryName.style.padding = "10px"
    countryName.innerText = name;
    img.src = flag;
    img.classList.add("flag-img")
    bookmarkIcon.classList.add("far")
    bookmarkIcon.classList.add("fa-bookmark")
    bookmarkIcon.classList.add("fa-3x")
    nameCell.classList.add("bookmarkIcon")

    nameCell.appendChild(countryName)
    nameCell.appendChild(bookmarkIcon)
    flagCell.append(img)

    newRow.classList.add("country")

    return newRow;
}