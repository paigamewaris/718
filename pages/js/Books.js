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

/* other functions */
let download_btn = document.querySelectorAll("[data-download-btn]")

// for(let i of download_btn){
//     i.addEventListener('mouseover', function(){
//         i.classList.add("download_btn_anim")
//     })
//     i.addEventListener('mouseleave', function(){
//         i.classList.remove("download_btn_anim")
//     })
// }

for(let i = 0; i < download_btn.length; i++){
    download_btn[i].addEventListener('mouseover', function(){
        download_btn[i].classList.add("download_btn_anim")
    })
    download_btn[i].addEventListener('mouseleave', function(){
        download_btn[i].classList.remove("download_btn_anim")
    })
}