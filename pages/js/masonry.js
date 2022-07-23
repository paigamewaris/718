let sectionPhotos = document.querySelector("[data-photos]")
let dataSectionPhotosContainer = document.querySelector("[data-section-photos-container]")
let count = sectionPhotos.dataset.photos

for(let i = 1; i <= count; i++){
    let codeSnipit = dataSectionPhotosContainer.content.cloneNode(true).children[0]
    sectionPhotos.append(codeSnipit)
}