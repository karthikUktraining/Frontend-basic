let evenNumbers = [2, 4, 6, 8, 10, 10, 12, 14]
let evenFakeNumbers = [2, 4, 6, 8, 10, 10, 12, 14]
let unsortedNumbers = [2, 1, 4, 5, 9, 6, 8, 7, 10, 13, 14, 15, 16, 22, 25, 12, 14]

let emyptArray = []
//Array.length() to find the length of the array
let lengthOfArray = evenNumbers.length //it returns us the number of elements in a array
console.log("lengthOfArray-------------", lengthOfArray)

//Array.push() is used  to add a element to the end of the array
evenNumbers.push(16)
console.log("addElementToEndOfArray-------------push", evenNumbers)


//Array.pop()   is  to remove a element from the end of the array

evenNumbers.pop()
console.log("removeElementToEndOfArray-------------pop", evenNumbers)

//Array.shift() is used  to remove a element to the beginning of the array
evenNumbers.shift()
console.log("removeElementToBeginningOfArray-------------shift", evenNumbers)

//Array.unshift() is used  to remove a element to the beginning of the array
evenNumbers.unshift(2)
console.log("addElementToBeginningOfArray-------------unshift", evenNumbers)


//Array.sort() is used to sort the number 
//accending order a-b
//deccending order b-a
let aplhabets = ["b", "c", "y", "u", "a", "t"]
unsortedNumbers.sort((a, b) => b - a)
console.log("sort the array-------------unsortedNumbers", aplhabets.sort())


//Array.reverse() is used reverse the items in array
evenNumbers.reverse()
console.log("reverse the array-------------reverse", evenNumbers)


console.log("find index of the element in the array-------------indexOF", evenNumbers.indexOf(10))


function name(params) {

}


let filterArray = evenNumbers.filter((element, index) => { return element === 10 })
//difference between Filter and find
let findArray = evenNumbers.find((element, index) => { return element === 10 })


let mapArray = evenNumbers.map((element, index) => { return { number: element } })


let reduceArray = evenNumbers.reduce((num1, num2) => { return num2 * num1 }, 1)



console.log("filterArray", filterArray)

console.log("findArray", findArray)
console.log("mapArray", mapArray)
console.log("reduceArray", reduceArray)




let amazonArray = [
    { catergory: "mens", title: "Just Eat Plus included with Amazon Prime", image: "https://images-eu.ssl-images-amazon.com/images/G/29/marketing/prime/reduce_size_1._SY304_CB570029445_.jpg" },
    { catergory: "mens", title: "Discover discounted returned products", image: "https://images-eu.ssl-images-amazon.com/images/G/29/warehouse-deals/Desktop_PP_379x304._SY304_CB586729523_.jpg" },
    { catergory: "womens", title: "Computer products and accessories", image: "https://images-eu.ssl-images-amazon.com/images/G/29/Events/2021/IT_fallback_campaigns/XCM_CUTTLE_1321861_1653915_DE_3783397_379x304_1X_IT._SY304_CB639715330_.jpg" },
    { catergory: "womens", title: "Home & Kitchen", image: "https://images-eu.ssl-images-amazon.com/images/G/29/IT-hq/2025/img/X_Site/XCM_CUTTLE_2153110_6411191_379x304_1X_it_IT._SY304_CB547994611_.jpg" },
    { catergory: "womens", title: "Home & Kitchen", image: "https://images-eu.ssl-images-amazon.com/images/G/29/IT-hq/2025/img/X_Site/XCM_CUTTLE_2153110_6411191_379x304_1X_it_IT._SY304_CB547994611_.jpg" },
    { catergory: "womens", title: "Home & Kitchen", image: "https://images-eu.ssl-images-amazon.com/images/G/29/IT-hq/2025/img/X_Site/XCM_CUTTLE_2153110_6411191_379x304_1X_it_IT._SY304_CB547994611_.jpg" },
    { catergory: "womens", title: "Home & Kitchen", image: "https://images-eu.ssl-images-amazon.com/images/G/29/IT-hq/2025/img/X_Site/XCM_CUTTLE_2153110_6411191_379x304_1X_it_IT._SY304_CB547994611_.jpg" },
]
let filteredAmzArr = amazonArray.filter(function (item, index) {
    return item.catergory === "mens"
})

let amzCard = document.getElementById("amzCard")
amazonArray.map((item, index) => {

    let cardDiv = document.createElement("div")
    let title = document.createElement("h2")
    let img = document.createElement("img")
    title.innerHTML = item.title
    img.src = item.image
    amzCard.append(cardDiv)
    cardDiv.id = "cardDiv"
    cardDiv.append(title, img)
})


