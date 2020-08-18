export function removeItemByValue(arr, value) {
   return arr = arr.filter(item=> {item.name !== `${value}`})
}