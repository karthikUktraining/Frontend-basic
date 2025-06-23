// single thread operation engine

// means it will take one operation at a time.


console.log("1")
console.log("2")
function consoleSomething() {
    console.log("3")
}
setTimeout(consoleSomething, 0)
console.log("4")
console.log("5")
console.log("6")


function convertResToJSON(res) {
    return res.JSON()
}


//OOPS 
// 1.synchronous
// code runs line by line ,blocking next operation untill it finished current operations . it slows other task
//if current slow it effects other task timing and web operations


// 2.asynchronous

// code doesnt wait for long tasks
//its doesnt block other code
// ex:callbacks,promise , and aysn/await


// callbacks

// a callback is a function passed as an parameter or arugument to another function.


function sum(a, b) {
    console.log("sum", a + b)
}
function sub(a, b) {
    return a - b
}
function calculatorOperations(a, b, operation) {
    return operation(a, b)
}
calculatorOperations(5, 6, sum)
console.log()

async function greet() {
    try {
        console.log("hello")
        let res = await fetch("https://pokeapi.co/api/v2/pokemon")
        let data = await res.json();
        console.log(data)
    } catch (error) {
        console.log(error)
    }
}


greet()
function one() {
    console.log("1")

}
function two() {
    console.log("2")

}
function three() {
    console.log("3")

}
function four() {
    console.log("4")

}

one()
two()
three()
four()



