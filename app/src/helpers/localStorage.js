/**
 *The function adds an item in localStorage. As a parameter, accepts two arguments, the first argument  should be string, the second argument can be any kind of type.
 * @param {string}-localStorage property key
 * @param {*}-localStorage property value
 * @returns {*}-property value
 */

export function addItemToLocalStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value)); //@TODO add try catch 
  return value;
}


/**
 *The function gets the item from localStorage by key. As a parameter accepts one  argument- property key.
 * @param {string}-localStorage property key
 * @returns {object}-local storage property value
 */

export function getItemFromLocalStorage(key){
  return JSON.parse(localStorage.getItem(`${key}`));
}


/**
 *The function removes the item from localStorage by key. As a parameter accepts one argument- property key, which will be deleted.
 * @param {string}-localStorage property key
 * @returns {string}-localStorage property key
 */

export function removeItemFromLocalStorage(key){
  localStorage.removeItem(`${key}`);
  return key;
}
