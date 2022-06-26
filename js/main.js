let new_badge = document.querySelector("[data-new-badge]")
new_badge.classList.add("new_anim")

// 
let NavSearchButton = document.querySelector("[data-nav-search-button]")
let SearchSection = document.querySelector(".search-section")
let CloseSearch = document.querySelector(".close-search")
NavSearchButton.addEventListener("click", function(){
    SearchSection.style.display = "block"
})
CloseSearch.addEventListener("click", function(){
    SearchSection.style.display = "none"
})
resp_nav_open_search.addEventListener("click", function(e){
    e.preventDefault()
    SearchSection.style.display = "block"
})

// search bar
let SearchBox = document.querySelectorAll(".search-box")
let SearchButton = document.querySelectorAll("[data-search-button]")
let InputSearch = document.querySelectorAll("[data-search-input]")
for(let i = 0; i<=SearchBox.length-1; i++){
    SearchButton[i].addEventListener("click", function(){
        InputSearch[i].focus()
    })
    
    InputSearch[i].addEventListener("focus", function(){
        SearchBox[i].style.outline = "3px solid #fff"
        SearchBox[i].style.boxShadow = "0 0 8px 3px #fff"
    })
    InputSearch[i].addEventListener("blur", function(){
        SearchBox[i].style.outline = 0
        SearchBox[i].style.boxShadow = "none"
    })
    
    
    // search function
    let userCardTemplate = document.querySelectorAll("[data-user-template]")
    let userCardContainer = document.querySelectorAll("[data-user-cards-container]")
    
    let users1
    let users2
    let usersArray = [users1, users2]
    
    InputSearch[i].addEventListener("input", function(e){
        let value = e.target.value.toLowerCase()
        !value ? userCardContainer[i].classList.add("hide") : userCardContainer[i].classList.remove("hide")
    
        usersArray[i].forEach(user => {
            let isVisible = user.ContentName.toLowerCase().includes(value) || user.ContentCategory.toLowerCase().includes(value)
            user.element.classList.toggle("show", isVisible)
        })
    })
    
    let userAPI = fetch("https://paigamewaris.github.io/718/js/ContentData.json")
    
    async function getuserdata() {
        let userdata = await userAPI
        let userdata_json = userdata.json()
        let data = await userdata_json
        return data
    }
    
    let storevalue1
    let storevalue2
    let storevalueArray = [storevalue1, storevalue2]
    storevalueArray[i] = getuserdata()
    storevalueArray[i].then(function(res){
            usersArray[i] = res.map(user => {
                let card = userCardTemplate[0].content.cloneNode(true).children[0]
                let header = card.querySelector("[data-header]")
                let body = card.querySelector("[data-body]")
                header.textContent = user.ContentName
                header.setAttribute("href", user.ContentName)
                body.textContent = user.ContentCategory
                userCardContainer[i].append(card)
                return {
                    ContentName: user.ContentName,
                    ContentCategory: user.ContentCategory,
                    element: card
                }
        });
    })
}