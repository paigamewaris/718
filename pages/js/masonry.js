// below function automatically takes section-photo__box equal to data-photos count
let sectionPhotos = document.querySelector("[data-photos]")
let count = sectionPhotos.dataset.photos
let dataSectionPhotosContainer = document.querySelector("[data-section-photos-container]")

var windowLocationPathname = window.location.pathname

for(let i = 0; i <= count - 1; i++){
    let codeSnipit = dataSectionPhotosContainer.content.cloneNode(true).children[0]
    let newPath = `img/masonry/${i+1}.jpg`
    codeSnipit.firstElementChild.src = newPath
    sectionPhotos.append(codeSnipit)
}

// image open & close functions
let body = document.querySelector("body")
let photosBoxImage = document.querySelectorAll("[data-img]")
let photosBoxClose = document.querySelectorAll("[data-photos-box-close]")

photosBoxImage.forEach( (photoboxImage, i) => {
    photoboxImage.addEventListener('click', function(){
        
        this.parentElement.classList.add("masonry-img-show");
        body.classList.add("body-modal-open")
  
        window.history.pushState(String(this.parentElement), "Modal title", document.location+'#modal');

        window.addEventListener('popstate', function(e) {
            photosBoxImage[i].parentElement.classList.remove("masonry-img-show");
            body.classList.remove("body-modal-open")
        }, false);
        
        setTimeout(() => {
            photosBoxImage[i].parentElement.focus();
        }, 1);
        
    })
})

photosBoxClose.forEach( (photoboxClose, i) => {
    photoboxClose.addEventListener('click', function(){
        if ( window.history.state === String(photosBoxImage[i].parentElement) ) {
            history.go(-1);
        }
          
        window.removeEventListener('popstate', function(e){
            photosBoxImage[i].parentElement.classList.remove("masonry-img-show");
            body.classList.remove("body-modal-open")
        });
    })
} )