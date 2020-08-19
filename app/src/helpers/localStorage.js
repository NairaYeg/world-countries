/**
 *The function adds an item in localStorage. Like a parameter, accepts two arguments, the first argument  should be string, the second argument can be any kind of type.
 * @param {string}-localStorage property key
 * @param {*}-localStorage property value
 * @returns {*}-property value
 */

export function addItemToLocalStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value)); //@TODO add try catch 
  return value;
}


