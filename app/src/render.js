import {getFavoriteCountries} from "./services/getFavoriteCountries.js"
import {BASE_URL} from "./constants/api.js"
import {addItemToLocalStorage} from "./helpers/localStorage.js"
import {removeItemByValue} from "./helpers/array.helper.js"
import {addItemToSessionStorage} from "./helpers/sessionStorage.js"
import {makeRowContent} from "./helpers/makeRowContent.js"

export let favoriteCountries = [...getFavoriteCountries()]

export const  render = (body, countries, title, titleContext="We are the one") =>{
   if(title){
     title.innerText = `${titleContext}`
   }
    body.innerText = ""
    countries.forEach((state) => {
    createTableRow(state.name, state.flag, body)
    });
} 


export const renderErrorMessage =(body, message, title, titleContext="We are the one") =>{
  if(title){
    title.innerText = `${titleContext}`
    }
    body.innerText = "";
    const errMessage = document.createElement("h3")
    errMessage.innerText = `${message}`
    body.append(errMessage)
}



export const createTableRow = (name, flag, tableBody, country = null) =>{
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
        
        favoriteCountries.push(favCountry)
        addItemToLocalStorage("favoriteCountries", favoriteCountries);
        return;
      }
      if (icon.classList.contains("fas")) {
        removeItemByValue(favoriteCountries, name);
        addItemToLocalStorage("favoriteCountries", favoriteCountries);
        icon.classList.remove("fas");
        icon.classList.add("far");
        nameCell.innerText = "";
        nameCell.appendChild(countryName);
        nameCell.appendChild(icon);
        return;
      }
    });
      
    flagCell.addEventListener("click", ()=>{
        addItemToSessionStorage("currentCountry", `${name}`)
        window.location.href = "country.html"
    })

    if(country){
      img.style.width = "400px";
      const secondRow = tableBody.insertRow(tableBody.length);
      secondRow.classList.add("info-wrapper")
      const nativeName = secondRow.insertCell(0);
      const capital = secondRow.insertCell(1);
      const region = secondRow.insertCell(2)
      const population = secondRow.insertCell(3)
      const borders = secondRow.insertCell(4)
      const timezone = secondRow.insertCell(5)
      const domain = secondRow.insertCell(6)
    

      let nativeNameCellContent = makeRowContent("Native Name:", country.nativeName.trim())
      let capitalCellContent = makeRowContent("Capital City:", country.capital.trim())
      let domainCellContent = makeRowContent("Top Level Domain:", country.topLevelDomain)
      let regionCellContent = makeRowContent("Region:", country.region.trim())
      let populationCellContent = makeRowContent("Population:", country.population)
      let bordersCellContent = makeRowContent("Borders:", country.borders.join("  ").trim())
      let timezoneCellContent = makeRowContent("Timezones:", country.timezones.join('').trim())
      nativeName.append(nativeNameCellContent)
      capital.append(capitalCellContent)
      domain.append(domainCellContent)
      region.append(regionCellContent)
      population.append(populationCellContent)
      borders.append(bordersCellContent)
      timezone.append(timezoneCellContent)

    }

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
  



