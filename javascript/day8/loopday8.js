let divlist = document.getElementById("list")

let orderedList = document.createElement("ol")
divlist.append(orderedList)

let phonePrefix = ["+44", "+39", "+91", "+49", "+33", "81", "+96"]


//in for object
//of for array
for (prefix of phonePrefix) {
    let li = document.createElement("li")
    let br = document.createElement("br")
    orderedList.append(li)
    orderedList.append(br)
    li.innerHTML = prefix
}

