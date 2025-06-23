
console.log("welcome to dom file")
function add() {
    let tagBtn = document.getElementsByTagName("p")
    tagBtn[0].style = "visibility:visible"

    let num1 = document.getElementById("num1").valueAsNumber
    let num2 = document.getElementById("num2").valueAsNumber
    let result = document.getElementById("result")
    let sum = num1 + num2
    result.innerHTML = "result : " + sum

}
function sub() {

    let num1 = document.getElementById("num1").valueAsNumber
    let num2 = document.getElementById("num2").valueAsNumber
    let result = document.getElementById("result")
    let subt = num1 - num2
    result.innerHTML = "result : " + subt


}
function multiply() {

    let num1 = document.getElementById("num1").valueAsNumber
    let num2 = document.getElementById("num2").valueAsNumber
    let result = document.getElementById("result")
    let multi = num1 * num2
    result.innerHTML = "result : " + multi


}
function div() {

    let num1 = document.getElementById("num1").valueAsNumber
    let num2 = document.getElementById("num2").valueAsNumber
    let result = document.getElementById("result")
    let divValue = num1 / num2
    result.innerHTML = "result : " + divValue


}
function mod() {

    let num1 = document.getElementById("num1").valueAsNumber
    let num2 = document.getElementById("num2").valueAsNumber
    let result = document.getElementById("result")
    let divValue = num1 % num2
    result.innerHTML = "result : " + divValue


}
function reset() {

    let num1 = document.getElementById("num1")
    let num2 = document.getElementById("num2")
    num1.value = 0
    num2.value = 0
    let result = document.getElementById("result")
    result.innerHTML = "result : "


}

function addNumberInInput(num) {


    let num1 = document.querySelector("input#num1")

    let btn = document.getElementsByClassName("numBtn")
    let btn2 = btn[2]
    btn2.innerHTML = 33
    btn2.style = "background-color:red"

    console.dir(btn2)
    //  let num1 = document.getElementById("num1")
    console.dir(num1)
    let num2 = document.getElementById("num2")

    num1.value = num1.value + num
    num2.value = num2.value + num

}


//Array


let names = [["karthik", "thulasi", "farhan", "Quavi"], 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "skdask00", true, false,]
numArray[0][3] = "shaik"
numArray[2] = numArray[0]
numArray[1] = { name: "karthik" }
numArray[11] = 11

console.log("numArray", numArray)
console.log("numArray", numArray[1].name)
console.log(" numArray[5].name", numArray[5].name)


//object 
//object {key:value,key:value}
let person = {
    firstName: "karthik",
    age: 29,
    married: true,
    children: {},

    numArray: numArray,
    callKarthik: () => { console.log("karthik") }
}

person.age = 30
person.married = false
person.dob = "18-05-1995"
console.log("person", person)
console.log("person", person.age)
console.log("person", person.firstName)
console.log("person.numArray[1]", person.numArray[1])


//
// gets the first element with id given  to access it properties result Object
let input1 = document.getElementById("num1")


// getElementsByClassName will get u all element with class name given in an Array 
let numBtn = document.getElementsByClassName("numBtn")


// getElementsByTagName will get u all element with tag name in an arry

let resultP = document.getElementsByTagName("div")[0].children[0]

console.log("resultP", resultP)
console.dir("resultP", resultP)


//querySelector =  its give first element with given query 

let queryPId = document.querySelector("p#result")
let queryPClass = document.querySelector("p.result")


//querySelectorAll = its gives all the element with matching query

let queryAllBTn = document.querySelectorAll("div")
console.log("queryAllBTn", queryAllBTn)


//removeChild  u can only remove the child element ex FirstElement child and lastElementChild
//queryAllBTn[1].removeChild(queryAllBTn[1].firstElementChild)
//queryAllBTn[1].removeChild(queryAllBTn[1].lastElementChild)


//remove remove all the children
let result2 = queryAllBTn[0].children[2]

//queryAllBTn[2].remove()

// createElement to create  new element
/* 
const input = document.createElement("input")
const inputnew = document.createElement("input")
const title = document.createElement("h3")
title.innerHTML = "operation box" */




//queryAllBTn[1].append(title)
//queryAllBTn[0].append(input)


//append will add the new element 

//to modify text or add text or remove
//innerHtml
//.style
//queryAllBTn[2].style = "background-color:grey;"



//home all the button of number and operation from js file
const btn1 = document.createElement("button")
const btn2 = document.createElement("button")
const btn3 = document.createElement("button")
const btn4 = document.createElement("button")
const btn5 = document.createElement("button")
const btn6 = document.createElement("button")
const btn7 = document.createElement("button")
const btn8 = document.createElement("button")
const btn9 = document.createElement("button")
const btn0 = document.createElement("button")
const btnplus = document.createElement("button")
btn1.innerHTML = 1
btn1.className = "numBtn"
btn2.innerHTML = 2
btn1.onclick = "addNumberInInput(1)"
queryAllBTn[2].append(btn1, btn3, btn4, btn5, btn6, btn7, btn8, btn9, btn0)
queryAllBTn[3].append(btnplus)

console.log("btn1", document.getElementsByClassName("numBtn"))





