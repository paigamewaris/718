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

// waqiyat modal JS
let waqiyat = document.querySelectorAll("#waqiya")
let waqiyat_pages = document.querySelectorAll(".waqiya_pg")
let waqiya_pg_close = document.querySelectorAll(".waqiya_pg_close")

// for modal open
for(let i = 0; i <= waqiyat.length-1; i++){
    waqiyat[i].addEventListener('click', function(e){
        waqiyat_pages[i].style.display = "block"
        waqiyat_pages[i].classList.add("slideIn_right_anim")
        setTimeout(function() {
            waqiyat_pages[i].classList.remove("slideIn_right_anim")
        }, 500);
        e.preventDefault()
    })
}
// for close waqiya pg
for(let i = 0; i <= waqiya_pg_close.length-1; i++) {
    waqiya_pg_close[i].addEventListener('click', function(){
        waqiyat_pages[i].classList.add("slideOut_left_anim")
        setTimeout(function() {
            waqiyat_pages[i].classList.remove("slideOut_left_anim")
            waqiyat_pages[i].style.display = "none"
        }, 500);
    })

    waqiya_pg_close[i].addEventListener('mouseover', function(){
        waqiya_pg_close[i].classList.add("rotate_anim")
    })
    waqiya_pg_close[i].addEventListener('mouseleave', function(){
        waqiya_pg_close[i].classList.remove("rotate_anim")
    })
}