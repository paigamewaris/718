/* JS for navigation starts here */
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
/* JS for navigation ends here */


// waqiyat JS
/*
let read_more_btn = document.querySelector(".read_more")
let read_less_btn = document.querySelector(".read_less")
let waqiyat_div = document.querySelector(".waqiyat")

read_more_btn.addEventListener('click', open_waqiyat)
read_less_btn.addEventListener('click', close_waqiyat)

function open_waqiyat() {
    waqiyat_div.style.height = "auto"
    read_more_btn.style.display = "none"
    read_less_btn.style.display = "block"
}
function close_waqiyat() {
    waqiyat_div.style.height = "130px"
    read_less_btn.style.display = "none"
    read_more_btn.style.display = "block"
}
*/
// waqiyat modal JS
let waqiyat = document.querySelectorAll("#waqiya")
let waqiyat_pages = document.querySelectorAll(".waqiya_pg")

for(let i = 0; i <= waqiyat.length-1; i++){
    waqiyat[i].addEventListener('click', function(e){
        waqiyat_pages[i].style.display = "block"
        e.preventDefault()
    })
}


// bayan JS
let bayan_div = document.querySelector(".bayan .bayan_alignment")
let scroll_left = document.querySelector(".prev")
let scroll_right = document.querySelector(".next")

scroll_left.addEventListener('click', function(){
    bayan_div.scrollBy(-280, 0)
})
scroll_right.addEventListener('click', function(){
    bayan_div.scrollBy(280, 0)
})