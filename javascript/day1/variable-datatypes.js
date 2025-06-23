console.log("Welcome Datatype files")

// Data types in JS

//Primitives types : Number , string ,Boolean , undefined,Null , BigInt , Symbol


/*
 let phoneNumber = 123455666 ---Number
 let Name  = "Karthik123"  used to wrote letter number symbols inside the double or single quotation
 let isFollow = true ---Boolean always true or false
  let Age = undefined  -- not value given yet ;
  let Adress = null --value something unknown;



*/


//Non-Primitive Data types : Array ,Object,RegEx
//Array 
 const studentsName = ["karthik","Qhavi","Farhan","Thulasi"]
 studentsName[1] = "Shaik" 
    console.log(studentsName[1])
const studentsAge = [29,27,27,27]
const newArray = [29,"29jdijds","karthik",true,null,undefined]


//Object {keys:values,}

let Car = {
    "brand":"Audio",
    "Model":"A5",
    "Year":2023,
    "noOfTypres":4,
    "automatic":true,
    airBags:8,
}

console.log(Car)