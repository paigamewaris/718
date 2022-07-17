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
    console.log(a)
    a.addEventListener("click", CloseNav)
})

function CloseNav() {
    body.classList.remove("modal-open-body")
    resp_nav.classList.remove("My_slideInRight")
    overlay.style.display = "none"
}


// footer
let footerData = `<div class="common_wrapper"> <div class="sec1"> <div class="social_media"> <a href="https://www.facebook.com/paigamewaris/" target="_blank" title="paigamewaris facebook page"> <span class="sr-only">facebook</span> <span class="fa fa-facebook" aria-hidden="true"></span> </a> <a href="https://instagram.com/paigam_e_waris?igshid=w58oscez9zoh" target="_blank" title="paigamewaris instagram page"> <span class="sr-only">instagram</span> <span class="fa fa-instagram" aria-hidden="true"></span> </a> <a href="https://youtube.com/c/PaigameWaris" target="_blank" title="paigamewaris youtube page"> <span class="sr-only">youtube</span> <span class="fa fa-youtube-play" aria-hidden="true"></span> </a> <a href="https://paigamewaris.blogspot.com/2022/03/silsilaye-warsi-books.html" target="_blank" title="paigamewaris blog page"> <span class="sr-only">blog</span> <span class="fa fa-pencil" aria-hidden="true"></span> </a> <a href="mailto:paigamewaris707@gmail.com" target="_blank" title="email to paigamewaris"> <span class="sr-only">email</span> <span class="fa fa-envelope-o" aria-hidden="true"></span> </a> </div></div></div><div class="sec2"> <p><span aria-hidden="true"><span class="sr-only">copyright</span>&copy;</span> 2022 <a href="https://yusuf0786.github.io/paigamewaris/">paigam<span>&#8208;</span>e<span>&#8208;</span>waris</a></p><p>Developed by <a href="mailto:yusssuf0786@gmail.com">Yusuf Ansari</a></p></div>`
let footerSection = document.querySelector("[data-footer]")
footerSection.innerHTML = footerData