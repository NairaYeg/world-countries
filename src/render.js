import {getFavoriteCountries} from "./services/getFavoriteCountries.js" 
import {BASE_URL} from "./constants/api.js"
import {addItemToLocalStorage} from "./helpers/localStorage.js"
import {removeItemByValue} from "./helpers/array.helper.js"
import {title} from "./index.js"


export const  render = (countries, body, titleContext = null) =>{
   if(title){
     title.innerText = `${titleContext}`
   }
    body.innerText = ""
    countries.forEach((state) => {
    createTableRow(state.name, state.flag, body)
    });
}

export const renderErrorMessage =(body, message) =>{
    const errMessage = document.createElement("h3")
    errMessage.innerText = `${message}`
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
    getFavoriteCountries().forEach((country) => {
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
        
        getFavoriteCountries().push(favCountry);
        getFavoriteCountries().unshift("Blaaa")
        console.log(getFavoriteCountries())
        addItemToLocalStorage("favoriteCountries", getFavoriteCountries());
        return;
      }
      if (icon.classList.contains("fas")) {
        removeItemByValue(getFavoriteCountries(), name);
        addItemToLocalStorage("favoriteCountries", getFavoriteCountries());
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
  