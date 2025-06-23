let numBtn = document.getElementById("numBtn")



//Loops

// 1. For loop
/* for (let i = 0; i < 10; i++) {
    console.log("i-------------", i)

} */


// 2. For In  loop is used mostly for objects
let car = {
    brand: "audii",
    model: 2025,
    color: "red",
    airbags: 5,
    childLock: true,

}

console.log(car.brand)
console.log(car["brand"])
/* car["brand"] = "tesla"
car.brand = "audii" */

for (let i in car) {
    console.log(i, "=", car[i])
}



//3. For Of  loop is used mostly for Arrays


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
console.log("length", cars.length)
for (i = 0; i < cars.length; i++) {
    console.log("i----------", cars[i])
}

for (car of cars) {
    console.log("car--------", car)
}
console.log(cars)



let table = document.createElement("table")
let th = document.createElement("th")
let tr = document.createElement("tr")
table.append(tr)
numBtn.append(table)
for (header in car) {
    let th = document.createElement("th")
    tr.append(th)
    th.innerHTML = header
}

for (let car of cars) {
    console.log(car)
    let tr = document.createElement("tr")
    table.append(tr)

    for (let data in car) {
        console.log(data, "=====", car[data])
        let td = document.createElement("td")
        tr.append(td)
        td.innerHTML = car[data]
    }

}