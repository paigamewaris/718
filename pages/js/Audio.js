/* JS for navigation starts here */
// targeting the elements
// let nav_li = document.querySelectorAll(".mynavigation .mynav li")
// let menu_btn = document.querySelector(".menu_btn")
// let resp_nav = document.querySelector(".resp_nav")
// let resp_nav_close = document.querySelector(".close")
// let resp_nav_li = document.querySelectorAll(".resp_nav .nav_pg_1 ul li")
// let overlay = document.querySelector(".overlay")

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

// footer
// $(".footer").load("../footer.html")
$.ajax({url: "../footer.html",
    success: function(result) {
        $(".footer").html(result)
    }
})


// read more / less btn
// let read_more_btn = document.querySelectorAll(".read_more")
// let read_less_btn = document.querySelectorAll(".read_less")

// modal container  JS
let modal_container = document.querySelectorAll(".modal_container")

// read_more_btn[0].addEventListener('click', open_waqiyat)
// read_less_btn[0].addEventListener('click', close_waqiyat)

function open_waqiyat() {
    modal_container[2].style.height = "auto"
    read_more_btn[3].style.display = "none"
    read_less_btn[3].style.display = "block"
}

function close_waqiyat() {
    modal_container[2].style.height = "150px"
    read_less_btn[3].style.display = "none"
    read_more_btn[3].style.display = "block"
}

// waqiyat modal JS
// let body = document.querySelector("body")
let waqiyat = document.querySelectorAll(".kalam")
let waqiyat_pages = document.querySelectorAll(".kalam_pg")
let waqiya_pg_close = document.querySelectorAll(".kalam_pg_close")

// for modal open
for(let i = 0; i <= waqiyat.length-1; i++){
    waqiyat[i].addEventListener('click', function(e){
        body.classList.add("modal-open-body")
        waqiyat_pages[i].style.display = "block"
        waqiyat_pages[i].classList.add("modal_show_anim")
        setTimeout(function() {
            waqiyat_pages[i].classList.remove("modal_show_anim")
        }, 500);
        e.preventDefault()
    })
}
// for close waqiya pg
for(let i = 0; i <= waqiya_pg_close.length-1; i++) {
    waqiya_pg_close[i].addEventListener('click', function(){
        body.classList.remove("modal-open-body")
        waqiyat_pages[i].classList.add("modal_hide_anim")
        setTimeout(function() {
            waqiyat_pages[i].classList.remove("modal_hide_anim")
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