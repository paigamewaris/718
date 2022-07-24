let sectionPhotos = document.querySelector("[data-photos]")
let count = sectionPhotos.dataset.photos
let dataSectionPhotosContainer = document.querySelector("[data-section-photos-container]")
    

for(let i = 0; i <= count - 1; i++){
    let codeSnipit = dataSectionPhotosContainer.content.cloneNode(true).children[0]
    let newPath = `img/masonry/${i+1}.jpg`
    codeSnipit.firstElementChild.src = newPath
    sectionPhotos.append(codeSnipit)
}