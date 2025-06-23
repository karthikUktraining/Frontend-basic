for (let i = 0; i < 5; i++) {
    console.log("i----", i)
}


/* Object = {
    key:values
} */


let car = {
    seats: 4,
    gears: "manual",
    number: [1, 2, 3, 4, 5]
}
for (cars in car) {
    console.log("cars", cars)
    console.log("cars", car[cars])

}
for (gear of car.gears) {
    console.log("gear", gear)
}
for (number of car.number) {
    console.log("number", number)
}
car.seats = 6
car.childlock = true
car["gears"] = "automatic"
console.log("car", car)

//for()
let j = 0
/* while (j < 5) {
    console.log("J----", j); j++
    }*/
do {
    console.log("J----do", j); j++
} while (j < 6);


while (j < 6) {
    console.log("J----2while", j); j++
}


