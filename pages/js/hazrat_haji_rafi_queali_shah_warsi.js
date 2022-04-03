// read more / less btn functionality
let read_more_btns = document.querySelectorAll(".read_more")
let read_less_btns = document.querySelectorAll(".read_less")
let biography = document.querySelector(".Bio_graphy")
let waqiyat_div = document.querySelector(".waqiyat")

read_more_btns[0].addEventListener('click', open_biography)
read_less_btns[0].addEventListener('click', close_biography)

read_more_btns[1].addEventListener('click', open_waqiyat)
read_less_btns[1].addEventListener('click', close_waqiyat)

function open_biography() {
    biography.style.height = "auto"
    read_more_btns[0].style.display = "none"
    read_less_btns[0].style.display = "block"
}
function close_biography() {
    biography.style.height = "130px"
    read_less_btns[0].style.display = "none"
    read_more_btns[0].style.display = "block"
}

function open_waqiyat() {
    waqiyat_div.style.height = "auto"
    read_more_btns[1].style.display = "none"
    read_less_btns[1].style.display = "block"
}
function close_waqiyat() {
    waqiyat_div.style.height = "130px"
    read_less_btns[1].style.display = "none"
    read_more_btns[1].style.display = "block"
}

// waqiyat JS

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