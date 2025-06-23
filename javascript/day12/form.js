let form = document.querySelector("form")
let phoneNumber = document.getElementById("phoneNumber")

form.addEventListener("submit", (e) => {
    e.preventDefault()
    console.log(e)
    console.log(e)
    alert(`welcome  ${e.target[0].value} "your have succussfully signup for our services , with phoneNumer  ${e.target[1].value}  `)
})


phoneNumber.addEventListener("change", (e) => {
    phoneNumber.value = "+91" + e.target.value
})