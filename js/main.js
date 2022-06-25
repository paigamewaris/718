let new_badge = document.querySelector("[data-new-badge]")
new_badge.classList.add("new_anim")

// search bar
let SearchBox = document.querySelector(".search-box")
let SearchButton = document.querySelector("[data-search-button]")
let InputSearch = document.getElementById("search")
SearchButton.addEventListener("click", function(){
    InputSearch.focus()
})

InputSearch.addEventListener("focus", function(){
    SearchBox.style.outline = "3px solid #fff"
    SearchBox.style.boxShadow = "0 0 8px 3px #fff"
})
InputSearch.addEventListener("blur", function(){
    SearchBox.style.outline = 0
    SearchBox.style.boxShadow = "none"
})


// search function
let userCardTemplate = document.querySelector("[data-user-template]")
let userCardContainer = document.querySelector("[data-user-cards-container]")

let users = []

InputSearch.addEventListener("input", function(e){
    let value = e.target.value.toLowerCase()
    !value ? userCardContainer.classList.add("hide") : userCardContainer.classList.remove("hide")

    users.forEach(user => {
        let isVisible = user.ContentName.toLowerCase().includes(value) || user.ContentCategory.toLowerCase().includes(value)
        user.element.classList.toggle("show", isVisible)
    })

})

let userAPI = fetch("https://jsonplaceholder.typicode.com/users")

async function getuserdata() {
    let userdata = await userAPI
    let userdata_json = userdata.json()
    let data = await userdata_json
    return data
}

let storevalue = getuserdata()
storevalue.then(function(res){
        users = res.map(user => {
            let card = userCardTemplate.content.cloneNode(true).children[0]
            let header = card.querySelector("[data-header]")
            let body = card.querySelector("[data-body]")
            header.textContent = user.ContentName
            body.textContent = user.ContentCategory
            userCardContainer.append(card)
            return {
                name: user.name,
                email: user.email,
                element: card
            }
    });
})
