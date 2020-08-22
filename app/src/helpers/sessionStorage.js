export const addItemToSessionStorage = (key, value) =>{
    sessionStorage.setItem(key, JSON.stringify(value))
    return value;
}

export const getItemFromSessionStorage = (key) =>{
    let  current = JSON.parse(sessionStorage.getItem(key));
    return current; 
}