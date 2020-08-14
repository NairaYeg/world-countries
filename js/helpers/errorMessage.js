export const createErrorMessage =(body) =>{
    const errMessage = document.createElement("h3")
    errMessage.innerText = "You just got an error 404, congratulations !!!!!"
    body.append(errMessage)
}