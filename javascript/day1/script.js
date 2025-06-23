//alert("welcome to javascript class")
console.log("welcome to javascript world")


/* Variables in Javascript */
//variable are container for storing data
/* radius is variable
FirstName  = karthik
FirstName is variable
Karthik is data which is stored in memory
 */

// Variable Rules

/* 1. Variable names are case sensitive;
"a" & "A" is different
let firstname = "karthik"
let Firstname = "Farhan"
let FirstName  = "thulasi"
let firstName = "Qhavi" */

//case 
// 1 CamelCase = firstName /* this standard case used across all the company to define variable names  */
 

/* 2. only letters, digits,underscore(_) and $ is allowed.(not even space)

letters firstName
digit firstName1
underscore _first_name
 $firstname$


 3 only a letter,underscore(_)or $ should be 1st character.

_first_name
$first_name
firstName

how shouldnt write is

123firstName


4th rule : reserved words cannot be variable names

let = karthik
const = karthik
function = reserved word
https://www.w3schools.com/js/js_reserved.asp
http://medium.com/@code.ceeker/naming-conventions-camel-case-pascal-case-kebab-case-and-more-dc4e515b9652
 */

//three ways you declare a variable

//var : variable can be re-declared & updated.


 var firstName = "karthik";

 var firstName = "Thulasi" // with var u can re declare and update the variable vaue
/*  stopped using after  2015  */
 console.log("firstNAme",firstName)
 var firstName = "Farhan" // with var u can re declare and update the variable vaue

 //let : Variable cannot be re-declared but can be update 

 let userName = "karthik"


 userName  = "thulasi" //with let u can update value of userName Variable

 /// const :  Variable cannot be re-declare or updated

 const lastName = "Din"
 


 //lastName = "kar" /* cannot update the value again */



 
