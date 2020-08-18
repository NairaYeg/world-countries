
// const username = document.querySelector("#username")
// const password = document.querySelector("#password")
// const btn = document.querySelector(".lg-btn")
const form = document.getElementById("login-form")


form.addEventListener("submit", (event)=>{
     event.preventDefault()
     window.location.href = "index.html"
})

