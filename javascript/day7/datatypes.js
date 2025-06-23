


/*
1 string = "jdijjfd1221ç320"
2. number = 123 
3. boolean = true/false
4.object = {key:value,age:13,checkIn:true,num:[1,2,3,3],callingName:()=>{console.log("karthuj")}}
5.Array = ["12",object,array,boolean,124]

*/
let firstName = "karthik"//string
let age = 30 // number
let married = true //boolean if not married false
let parentNames = [{}, true, 2, "dad", "mum", {}, []] // array[]

//what is the difference between let,var and const
//tell different types datatype ?

let education = {
    th_standard10: "75%",
    "th_Std12": 7.5,
    "engineering": 8.5,
    "master": 100 / 100,
}

function callFirstName() {
    console.log("welcome to our family", callFirstName)
}

let person = {
    firstName: "karthik",
    age,
    married,
    parentNames,
    education,
    callFirstName,
}

let persons = [firstName, age, married,
    parentNames,
    education,
    callFirstName]

