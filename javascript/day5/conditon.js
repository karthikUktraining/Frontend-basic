function operation(typeOp) {
    console.log(typeOp)
    let input1 = document.getElementById("input1")
    let input2 = document.getElementById("input2")
    let result = document.getElementById("result")
    switch (typeOp) {
        case "add":
            result.innerHTML = input1.valueAsNumber + input2.valueAsNumber
            break;
        case "sub":
            result.innerHTML = input1.valueAsNumber - input2.valueAsNumber
            break;
        case "div":
            result.innerHTML = input1.valueAsNumber / input2.valueAsNumber
            break;
        case "multi":
            result.innerHTML = input1.valueAsNumber * input2.valueAsNumber
            break;
        case "modulus":
            result.innerHTML = input1.valueAsNumber % input2.valueAsNumber
            break;

        default:
            break;
    }

    switch (typeOp) {
        case "add":
            console.log("add")
            break;
        case "sub":
            console.log("sub")
            break;

    }
    /* if (typeOp === "add") {
         result.innerHTML = input1.valueAsNumber + input2.valueAsNumber
     } else if (typeOp === "sub") {
         result.innerHTML = input1.valueAsNumber - input2.valueAsNumber
 
     } else if (typeOp === "multi") {
         result.innerHTML = input1.valueAsNumber * input2.valueAsNumber
 
     } else if (typeOp === "div") {
         result.innerHTML = input1.valueAsNumber / input2.valueAsNumber
     } */


}