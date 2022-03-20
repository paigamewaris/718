// targeting the elements
let nav_li = document.querySelectorAll(".mynavigation .mynav li")
let menu_btn = document.querySelector(".menu_btn")
let resp_nav = document.querySelector(".resp_nav")
let resp_nav_close = document.querySelector(".close")
let resp_nav_li = document.querySelectorAll(".resp_nav .nav_pg_1 ul li")
let overlay = document.querySelector(".overlay")

// doing the functions
menu_btn.addEventListener("click", function(){
    resp_nav.classList.add("My_slideInRight")

    overlay.style.display = "block"
})
resp_nav_close.addEventListener("click", close_resp_nav)

function close_resp_nav() {
    resp_nav.classList.remove("My_slideInRight")
    overlay.style.display = "none"
}