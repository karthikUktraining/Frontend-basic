let btn = document.getElementById("btn")
let input = document.querySelector("input")
let form = document.querySelector("form")
let div = document.querySelector("div")
let checked = document.getElementById("checked")


btn.addEventListener("mouseenter", () => {
    btn.style = "width:200px;heigth:200px;background-color:black;color:white;"
})
btn.addEventListener("mouseleave", () => {
    btn.style = "width:100px;heigth:30px;background-color:white;color:black;"
})
btn.addEventListener("click", () => {
    checked.remove()
})

btn.addEventListener("dblclick", () => {
    let checkbox = document.createElement("input")
    div.append(checked)
    checkbox.type = "checkbox"
})
let number = [1, 2, 3, 4, 5, 6, 7]

form.addEventListener("submit", (e) => {
    e.preventDefault()


    console.log("event", e)
    let orderedList = document.querySelector("ol")
    if (orderedList) {

        orderedList.remove()
    } else if (e.target[1].checked) {

        let ol = document.createElement("ol")
        div.append(ol)
        let text = e.target[0].value
        number.map((item) => {

            let li = document.createElement("li")
            ol.append(li)
            li.innerHTML = item + text
        })
    }

})






