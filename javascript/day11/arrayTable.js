console.log("welcome to Array")

let divMap = document.getElementById("mapDiv")

let table = document.createElement("table")
divMap.append(table);









let car = {
    brand: "audii",
    model: 2025,
    color: "red",
    airbags: 5,
    childLock: true,

}
//for in loop for object
// for of loop for Array



let carHearders = ["Brand", "model", "color", "airbags", "childLock"]

let tr = document.createElement("tr")
table.append(tr)
for (carKey of carHearders) {
    console.log("carKey", carKey)
    let th = document.createElement("th")
    tr.append(th)
    th.innerHTML = carKey
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
    model: 2025,
    color: "blue",
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
    color: "blue",
    airbags: 2,
    childLock: false,

}, {
    brand: "audii",
    model: 2022,
    color: "red",
    airbags: 2,
    childLock: true,

}, {
    brand: "audii5",
    model: 2020,
    color: "black",
    airbags: 0,
    childLock: true,

}, {
    brand: "audii6",
    model: 2025,
    color: "red",
    airbags: 5,
    childLock: false,

},]
console.log("car length---------", cars.length)
//7object in the car array

let Ablum = [
    {
        songName: "song 1",
        artist: "artist 1",
        recors: "170M",
    },
    {
        songName: "song 2",
        artist: "artist 2",
        recors: "170M"
    },
    {
        songName: "song 3",
        artist: "artist 3",
        recors: "170M"

    },
    {
        songName: "song 4",
        artist: "artist 4",
        recors: "170M"

    }
]
for (let song of Ablum) {


    //song with all the details 
    //exampe song.name song.singeer , song.noOftimePlays
}

Ablum.map((song) => {
    //song with all the details 
    //exampe song.name song.singeer , song.noOftimePlays
    let divSong = document.createElement("div")
    let songName = document.createElement("h2")
    let divDetials = document.createElement("div")
    let artist = document.createElement("span")
    let records = document.createElement("span")

    divMap.append(divSong)
    divSong.append(songName)
    divSong.append(divDetials)
    divDetials.append(artist)
    divDetials.append(records)
    songName.innerHTML = song.songName
    artist.innerHTML = song.artist
    records.innerHTML = song.recors

    divSong.style = "width:200px;height:150px;background-color:black;margin:20px,color:white"
    songName.style = "color:white"
    records.style = "color:white"
    artist.style = "color:white"
    divDetials.style = "display:flex;justify-content:space-between"
})
//we use for of loop because cars was Array and as we had more than one tr or car data we used for Loop  for adding table row tr
/* for (let carData of cars) {

    // create tr and add tr to the table
    let trData = document.createElement("tr")
    table.append(trData)
    //add td to tr 
    //as there 5 td we have use for loop and carDAta is object we use For in loop
    for (let carKey in carData) {
        //create td and add td to tr 
        let td = document.createElement("td")
        trData.append(td)
        // now add the value of the key u get in this loop from carData Object
        //to value to td we have use innerHtml
        td.innerHTML = carData[carKey]
    }
}
 */
/* for (let car of cars) {
    console.log(car)
    let tr = document.createElement("tr")
    table.append(tr)

    for (let data in car) {
        console.log(data, "=====", car[data])
        let td = document.createElement("td")
        tr.append(td)
        td.innerHTML = car[data]
    }
 
}*/
let brand = document.getElementById("brand")
let model = document.getElementById("model")
let color = document.getElementById("color")
let airbags = document.getElementById("airbags")


const filterCar = () => {
    let mapTable = document.getElementById("mapTable")
    mapTable.remove()

    let filterCar = cars
    if (brand.value) {
        filterCar = filterCar.filter((f) => { return f.brand == brand.value })
    }
    if (Number(airbags.valueAsNumber)) {
        filterCar = filterCar.filter((f) => { return f.model === model.valueAsNumber })
    }
    if (color.value) {
        filterCar = filterCar.filter((f) => { return f.color == color.value })
    }
    if (Number(airbags.valueAsNumber)) {
        filterCar = filterCar.filter((f) => { return f.airbags == airbags.valueAsNumber })
    }
    /* if (childLock.value) {
        filterCar = filterCar.filter((f) => { return f.childLock == childLock.value })
    } */

    mapCar(filterCar)
}
const mapCar = (filterCars) => {
    let table = document.createElement("table")
    table.id = "mapTable"
    let th = document.createElement("th")
    let tr = document.createElement("tr")
    divMap.append(table)
    table.append(tr)
    console.log("mapCar")

    for (header in car) {
        let th = document.createElement("th")
        tr.append(th)
        th.innerHTML = header
    }
    console.log("filterCars", filterCars)
    filterCars.map((car, key) => {
        let tr = document.createElement("tr")
        table.append(tr)
        // typeOf car
        console.log("car-----11", typeof car, car)
        console.log("car------22", Object.entries(car))
        Object.entries(car).map((data) => {
            let td = document.createElement("td")
            tr.append(td)
            td.innerHTML = data[1]
        })
    })
}
//mapCar(cars)








