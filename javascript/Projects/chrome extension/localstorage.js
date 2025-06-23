let urls = []

function saveUrl() {
    alert("save url")
    let inputUrl = document.getElementById("urls")
    console.log(inputUrl.value)
    urls.push(inputUrl.value)
    console.log(urls)

    // urlsPresent && localStorage.removeItem("urlsList")
    localStorage.setItem("urlsList", JSON.stringify(urls))
    showUrl()

}
let saveBtn = document.getElementById("saveBtn")
saveBtn.addEventListener("click", saveUrl)
console.log(urls)
let urlsList = document.getElementById("urlsList")
function showUrl() {

    let urlsPresent = localStorage.getItem("urlsList")
    console.log("urlsPresent", urlsPresent)

    console.log("urls", urls)
    urlsList.innerHTML = ""
    if (urls?.length > 0) {

        urls?.map((url) => {
            console.log(url)
            let li = document.createElement("li")
            urlsList.append(li)
            li.innerHTML = url

        })
    }
}
showUrl()

//localStorage allow u to save value/keys pairs in the browser


//to save
localStorage.setItem("bookmarkUrls", JSON.stringify(urls))
//to get 
JSON.parse(localStorage.getItem("bookmarkUrls"))
//to remove
localStorage.removeItem("bookmarkUrls")

// to remove all
localStorage.clear()


