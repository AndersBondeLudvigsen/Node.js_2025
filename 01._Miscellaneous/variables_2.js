"use strict";
// totalGlobalVariable = "NEVER EVER!!! do this";
// var globalVariable = "Also not do this"

//rules
// always use const if you can
// otherwise use let
// never var

function myFunction (){
    //function scope
}


{
    //block scope
     console.log("what is this?")
}


{
    var myValue = true
    { 
        var myValue = false;
    }
    console.log(myValue)
}


{
    let myValue = true
    { 
        let myValue = false;
    }
    console.log(myValue)
}


//guard statement
for (var i=0; i <=5; i++){
    setTimeout(()=>{
            console.log(i);
    }, 1000);
}


for (let i=0; i <=5; i++){
    setTimeout(()=>{
            console.log(i);
    }, 1000);
}