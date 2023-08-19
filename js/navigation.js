location.replace("https://paigamewaris.000.pe/")

// targeting the elements
let body = document.querySelector("body")
let nav_li = document.querySelectorAll(".mynavigation .mynav li")
let menu_btn = document.querySelector(".menu_btn")
let resp_nav = document.querySelector(".resp_nav")
let resp_nav_close = document.querySelector(".close")
let resp_nav_li = document.querySelectorAll(".resp_nav .nav_pg_1 ul li")
let resp_nav_a = document.querySelectorAll(".resp_nav .nav_pg_1 ul li a")
let resp_nav_open_search = document.querySelector(".open-search")
let overlay = document.querySelector(".overlay")

// doing the functions
menu_btn.addEventListener("click", function(){
    body.classList.add("modal-open-body")
    resp_nav.classList.add("My_slideInRight")

    overlay.style.display = "block"
})
resp_nav_close.addEventListener("click", CloseNav)

resp_nav_a.forEach(function(a) {
    a.addEventListener("click", CloseNav)
})

function CloseNav() {
    body.classList.remove("modal-open-body")
    resp_nav.classList.remove("My_slideInRight")
    overlay.style.display = "none"
}


// navigation & footer

// $(function(){
//     $(".footer").load("footer.html")
// })

/*
<div class="js-component" data-name="header" data-ext="html"></div>
<div class="js-component" data-name="footer" data-ext="html"></div>

const components = document.querySelectorAll('.including-using-js')

const loadComponent = async c => {
    const { name, ext } = c.dataset
    const response = await fetch(`${name}.${ext}`)
    const html = await response.text()
    c.innerHTML = html
}
[...components].forEach(loadComponent)*/


// <div class="including-using-js" data-content="footer.html"></div>
/*
const footerSection = document.querySelector('[data-include-footer]')
const link = footerSection.dataset.content;

fetch(link)
.then(function (response) {
        return response.text();
    })
     .then(function (html) {
        footerSection.innerHTML = html;
    });
*/
