// read more / less btn
let read_more_btn = document.querySelectorAll(".read_more")
let read_less_btn = document.querySelectorAll(".read_less")


// modal container  JS
let modal_container = document.querySelectorAll(".modal_container")
let quotes_div = document.querySelector(".quotes")

read_more_btn[0].addEventListener('click', open_genealogical)
read_less_btn[0].addEventListener('click', close_genealogical)

read_more_btn[1].addEventListener('click', open_quotes)
read_less_btn[1].addEventListener('click', close_quotes)

read_more_btn[2].addEventListener('click', open_talimat)
read_less_btn[2].addEventListener('click', close_talimat)

read_more_btn[3].addEventListener('click', open_waqiyat)
read_less_btn[3].addEventListener('click', close_waqiyat)

function open_genealogical() {
    modal_container[0].style.height = "auto"
    read_more_btn[0].style.display = "none"
    read_less_btn[0].style.display = "block"
}
function open_quotes() {
    quotes_div.style.height = "auto"
    read_more_btn[1].style.display = "none"
    read_less_btn[1].style.display = "block"
}
function open_talimat() {
    modal_container[1].style.height = "auto"
    read_more_btn[2].style.display = "none"
    read_less_btn[2].style.display = "block"
}
function open_waqiyat() {
    modal_container[2].style.height = "auto"
    read_more_btn[3].style.display = "none"
    read_less_btn[3].style.display = "block"
}

function close_genealogical() {
    modal_container[0].style.height = "150px"
    read_less_btn[0].style.display = "none"
    read_more_btn[0].style.display = "block"
}
function close_quotes() {
    quotes_div.style.height = "200px"
    read_less_btn[1].style.display = "none"
    read_more_btn[1].style.display = "block"
}
function close_talimat() {
    modal_container[1].style.height = "150px"
    read_less_btn[2].style.display = "none"
    read_more_btn[2].style.display = "block"
}
function close_waqiyat() {
    modal_container[2].style.height = "150px"
    read_less_btn[3].style.display = "none"
    read_more_btn[3].style.display = "block"
}

// waqiyat modal JS
let waqiyat = document.querySelectorAll(".waqiya")
let waqiyat_pages = document.querySelectorAll(".waqiya_pg")
let waqiya_pg_close = document.querySelectorAll(".waqiya_pg_close")

// for modal open
for(let i = 0; i <= waqiyat.length-1; i++){
    waqiyat[i].addEventListener('click', function(e){
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