import {createTableRow} from "./createTableRow.js"
import {favoriteCountries} from "../constants/favCountries.js" 
import {BASE_URL} from "../constants/BASE_URL.js "
import {addItemLocalStorage} from "./helpers/localStorage.js"
import {removeItem} from "./removeItemFromArr.js"
import {createBookmarkIcon} from "./createBookmarkIcon.js"

export const  render = (countries, body) =>{
    body.innerText = ""
    countries.forEach((state) => {
    createTableRow(state.name, state.flag, body)
    });
}

export const renderErrorMessage =(body) =>{
    const errMessage = document.createElement("h3")
    errMessage.innerText = "You just got an error 404, congratulations !!!!!"
    body.append(errMessage)
}

export const createTableRow = (name, flag, tableBody) =>{
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
        removeItem(favoriteCountries, name);
        addItemLocalStorage("favoriteCountries", favoriteCountries);
        icon.classList.remove("fas");
        icon.classList.add("far");
        nameCell.innerText = "";
        nameCell.appendChild(countryName);
        nameCell.appendChild(icon);
        return;
      }
    });
  
      flagCell.addEventListener("click", ()=>{
        // country = name;
        console.log(country)
        // window.location.href = "country.html"
      })
  
    newRow.classList.add("country");
  
    return newRow;
  }
  

  /**
 *A function create bookmark icon,  accept  one argument, icon class, the look of the icon  depends on that class.
 * @param {string}-class name
 * @returns {object}-icon
 */

export const createBookmarkIcon=(classListItem) =>{
    let icon = document.createElement("i");
    icon.classList.add(`${classListItem}`);
    icon.classList.add("fa-bookmark");
    icon.classList.add("fa-2x");
    return icon;
  }
  