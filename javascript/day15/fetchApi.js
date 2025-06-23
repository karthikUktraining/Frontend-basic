//www.google.com --url
//  which is standard url software or webapplication for all the endpoints


// google-meet   or /youtube

// login 

//auth

//API Application Programming Interface


//Api connects backend and frontend



// Promise is a placeholder for a value  that is not available yet, 
// but will be resolved at some point in future.

//three states of promise
//pending   ---- operation is still in pending
//fulfilled --- Operation completed successfully (resolve)
//rejected   ---- operation failed (reject)

const promise = new Promise((resolve, reject) => {
    let success = false
    if (success) {
        resolve("success")
    } else {
        reject("something went wrong")
    }

})
console.log(promise)


/* fetch(url, options)
    .then((response => response.json()))
    .then((data) => {
        //handle data
    })
    .catch((error) => {
        //handle error
    })
 */
let pokemonUrl = "https://pokeapi.co/api/v2/pokemon/"



fetch(pokemonUrl)
    .then((r) => { return r.json() })
    .then((response) => {
        console.log("pokemonData", response)

        let pokemonList = document.getElementById("pokemonList")
        response.results.map((poke) => {

            let pokemonDiv = document.createElement("div")
            pokemonList.append(pokemonDiv)
            pokemonDiv.id = "pokemonDiv"

            fetch(poke.url)
                .then(res => res.json())
                .then((data) => {
                    console.log(data)

                    let pokemonImg = document.createElement("img")
                    let pokemonName = document.createElement("h2")
                    pokemonDiv.append(pokemonImg, pokemonName)
                    pokemonImg.src = data.sprites.front_default

                    pokemonName.innerHTML = poke.name
                    data.types.map((types) => {
                        let pokemonTypes = document.createElement("p")
                        pokemonDiv.append(pokemonTypes)
                        pokemonTypes.innerHTML = types.type.name
                    })
                })
        })

    })
    .catch((error) => {
        console.log("error", error)
        //alert("Error During Option")

    })

//CRUD

// HTTP Methods
//Create  --- we add the new data - POST - 
//Read  -- we ask or we get the stored data   -- GET --- use fetch userdetails or products list 
//Update  -- updata existing data - PUT/PATCH
//Delete   -- delete the existing data -DETELE



// HTTP 4 Methods  GET  POST PUT/PATCH  DETELE 





//To do an API call we need URL and Options which has Http method written in it



let options = {
    method: "GET"
}
fetch(pokemonUrl, { method: "GET" })
    .then((res) => { return res.json })
    .then((data) => { })
    .catch((error) => { })
