import {favoriteCountries} from "../constants/favCountries.js"
import {BASE_URL} from "../constants/BASE_URL.js "
import {addItemLocalStorage} from "../localStorage.js"
import {removeFromFavorites} from "../localStorage.js"
import {createBookmarkIcon} from "./createBookmarkIcon.js"


export function createTableRow(name, flag, tableBody) {
    const newRow = tableBody.insertRow(tableBody.length);
  
    let icon = createBookmarkIcon("far");
  
    const nameCell = newRow.insertCell(0);
    const flagCell = newRow.insertCell(1);
  
    let img = document.createElement("img");
    let countryName = document.createElement("h3");
  
    countryName.innerText = name;
    img.src = flag;
    img.classList.add("flag-img");
    flagCell.append(img);
  
    nameCell.appendChild(countryName);
    nameCell.appendChild(icon);
  
    nameCell.classList.add("bookmarkIcon");
    favoriteCountries.forEach((country) => {
      if (country.name === name) {
        nameCell.appendChild(countryName);
        icon.classList.remove("far");
        icon.classList.add("fas");
        nameCell.appendChild(icon);
      }
    });
  
    nameCell.addEventListener("click", () => {
      if (icon.classList.contains("far")) {
        icon.classList.remove("far");
        icon.classList.add("fas");
        nameCell.innerText = "";
        nameCell.appendChild(countryName);
        nameCell.appendChild(icon);
        let favCountry = { name: `${name}`, url: `${BASE_URL}/name/${name}` };
        favoriteCountries.push(favCountry);
        addItemLocalStorage("favoriteCountries", favoriteCountries);
        return;
      }
      if (icon.classList.contains("fas")) {
        removeFromFavorites(name);
        icon.classList.remove("fas");
        icon.classList.add("far");
        nameCell.innerText = "";
        nameCell.appendChild(countryName);
        nameCell.appendChild(icon);
        return;
      }
    });
  
    newRow.classList.add("country");
  
    return newRow;
  }
  