export const  makeRowContent = (key, value) =>{
    
    const content = document.createElement("div");
    const contentKey = document.createElement("h3");
    const contentValue = document.createElement("p");
    
    content.classList.add("grid-wrapper")
    contentKey.textContent = `${key}`;
    contentValue.textContent = `${value}`;
  
    contentKey.classList.add("key");
    contentValue.classList.add("value");
    content.appendChild(contentKey);
    content.appendChild(contentValue);
  
    return content;
  }
