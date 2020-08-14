export function removeItem(arr, value) {
    for(let i = 0; i < arr.length; i++ ){
        if(arr[i].name === value) {
         arr.splice(i, 1);
        }
    }
   
    return arr;
}