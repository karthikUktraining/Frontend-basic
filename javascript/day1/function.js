let iconsStatus   = {
    mircophone:true,
    camera:false,
    reaction:false,

}

//What is function ?

///function is a blockcof code which run  all the code when u call it 


/* function functionName(param1,param2,param3){
write code need to be executed 
} */
 //Normal Function
function consoleButton(){
    //change bg-code
    //change icon to muted icon
    //mute my voice and my should auidable to other
    console.log("Your clicked me")
    console.log("iconStatus",iconsStatus)
}


//Arrow Function
const  consoleIconStatus = ()=>{
    console.log("Your clicked me *---consoleIconStatus")
    console.log("iconStatus-------consoleIconStatus",iconsStatus)
}



function sum(a,b){
    console.log("sum ------------",a+b)
}

sum(5,3)


function sub(a,b){
    console.log("sub ------------",a-b)

}
sub(5,3)

const multiple = (c,d)=>{
    console.log("multiple ------------",c*d)

}
multiple(5,3)