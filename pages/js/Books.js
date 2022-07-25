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

// footer
$(function(){
    $(".footer").load("../footer.html")
})