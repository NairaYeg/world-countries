import {validate} from "./helpers/validate.js"

const username = document.querySelector("#username")
const password = document.querySelector("#password")
const form = document.getElementById("login-form")
const btn = document.querySelector(".lg-btn")

form.addEventListener("submit", (event)=>{
     event.preventDefault()
     window.location.href = "index.html"
})

