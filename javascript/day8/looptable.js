/*
task : add new table inside the div with id = divTable


table
first row - tr and th
header 
secont row onwars - tr and  td
step1:we have get or find the element div with id divtable.
step2 :  we create a new table.
step3 : we have to  add the table inside the div with id divtable

step4 :we have a tr - tableRow with th-TAbleHeader in it
step 5: Create tableRow
step6 : add tableRow in table

step7 : use array tableHeader and use for loop 
step8 : create th inside the for loop
step9 :add th inside tr
step 10 : add the text in th from the array 


step 11 : add for of loop with details array
step 12 : create and add tr inside the table

step 13 : add for in loop with detail from for of loop
 step 14 : create td and add td to tr
 step 15:add text in td



*/
let divTable = document.getElementById("divTable")
let table = document.createElement("table")
divTable.append(table)

let tableHeader = ["company", "contact", "country"]
let details = [
    {
        company: "apple",
        contact: "tim cook",
        country: "USA"
    },
    {
        company: "samsung",
        contact: "unkown",
        country: "korea"
    },
    {
        company: "tata",
        contact: "Ratan Tata",
        country: "India"
    },
    {
        company: "tata",
        contact: "Ratan Tata",
        country: "India"
    },
    {
        company: "tata",
        contact: "Ratan Tata",
        country: "India"
    },
    {
        company: "tata",
        contact: "Ratan Tata",
        country: "India"
    },
    {
        company: "tata",
        contact: "Ratan Tata",
        country: "India"
    },

    {
        company: "tata",
        contact: "Ratan Tata",
        country: "India"
    }, {
        company: "tata",
        contact: "Ratan Tata",
        country: "India"
    },
    {
        company: "tata",
        contact: "Ratan Tata",
        country: "India"
    },
]
// details has 3 objects only so loop will create 3 tr

let rowTable = document.createElement("tr")
table.append(rowTable)

for (header in tableHeader) {
    let th = document.createElement("th")
    rowTable.append(th)
    th.innerHTML = header
}

for (detail of details) {
    let tr = document.createElement("tr")
    table.append(tr)

    for (data in detail) {
        let td = document.createElement("td")
        tr.append(td)
        /*
         {
            key:value
        }
        data = key
        detail[data]
        
        */

        // td.innerHTML = data
        td.innerHTML = detail[data]
    }

}


