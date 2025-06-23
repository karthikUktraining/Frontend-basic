console.log("array")
let Fruits = ["apple", "pineApple", "Mango", true, false, 123, { name: "karthik" }, [1, 2, 3, 4,]]
console.log("Fruits", Fruits)
console.log("Fruits", Fruits.length)




/* //only removes
Fruits.pop()//removes last index values
Fruits.shift()//removes first index values
//only adds 
Fruits.push("apple")//adds to last index values
Fruits.unshift("Avacodo")//adds to first index values


//to find array lenght
console.log("Fruits.length ====", Fruits.length)
console.log("Fruits. ====", Fruits) */

//remove all elements or values except the given indexes ex:3to5

//console.log("Fruits. ====", Fruits.slice(1, 6))


//splice replace or add if the index is not present
console.log("Fruits. ====splice", Fruits.splice(0, 2, "JackFruit", "bannana", "pineApple"))//replaced
console.log("Fruits. ====splice", Fruits.splice(9, 11, "JackFruit", "bannana", "pineApple"))//adds only when the given index is not present
console.log("Fruits. ====updated", Fruits)
//splice(0 To 3,"a", "b,"c","D")



let FirstFruitArray = ["apple", "bannana"]
let secondFruitArray = ["Mango", "JackFruit", "apple"]

let mergedArray = FirstFruitArray.concat(secondFruitArray)
console.log("mergedArray", mergedArray)

let stringArr = mergedArray.join("/")
console.log("stringArr", stringArr)

//indexOf method is used to find the index of given value or element in an array
let appleIndex = mergedArray.indexOf("apple")
console.log("appleIndex", appleIndex)

let appleLastIndex = mergedArray.lastIndexOf("apple")
console.log("appleLastIndex", appleLastIndex)


let appleInclude = mergedArray.includes("apples") //2016
console.log("appleInclude", appleInclude)
//Normal Function
function add(a, b) {
    return a + b

}

//Arrow Function
let sum = (a, b) => {
    return a + b
}
let cars = [{
    brand: "audii",
    model: 2025,
    color: "red",
    airbags: 5,
    childLock: true,

},

{
    brand: "audii1",
    model: 2024,
    color: "red",
    airbags: 4,
    childLock: false,

}, {
    brand: "audii2",
    model: 2023,
    color: "red",
    airbags: 3,
    childLock: true,

}, {
    brand: "audii3",
    model: 2021,
    color: "red",
    airbags: 2,
    childLock: false,

}, {
    brand: "audii4",
    model: 2022,
    color: "red",
    airbags: 2,
    childLock: true,

}, {
    brand: "audii5",
    model: 2020,
    color: "red",
    airbags: 0,
    childLock: true,

}, {
    brand: "audii6",
    model: 2025,
    color: "red",
    airbags: 5,
    childLock: false,

},]

let arrWithObject
let findArray = cars.find((item, index) => { return item.childLock === true })
let filterArray = cars.filter((item, index) => { return item.childLock === true })
let mapArray = cars.map((item, index) => { console.log("index", index, `202${index}`); item.model = `202${index}`; return item })



console.log("findArray", findArray)
console.log("filterArray", filterArray)
console.log("mapArray", mapArray)

