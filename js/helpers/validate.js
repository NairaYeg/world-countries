export function validate(value, inputName){
     if(value.trim().length < 5){
        alert(`${inputName} must be longer than 5 characters`)
        value = ""
        throw new Error("Input is not valid")
     }
}