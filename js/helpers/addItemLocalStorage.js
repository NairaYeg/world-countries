/**
 *The function adds an item in localStorage. Like a parameter, accepts two arguments, the first argument  should be string, the second argument can be any kind of type.
 * @param {string}-localStorage property key
 * @param {*}-localStorage property value
 * @returns {undefined}
 */

export function addItemLocalStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
  return;
}



