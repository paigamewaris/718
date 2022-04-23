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