//avoid var
//const is not a constant
// that means that const CAN have its value changed
// const is a constant in the DECLARATION
// const MUSY be declared as it is initialized
// const name = "Anders"

//const me = {};
//me.name ="Anders"
//me.name = "Karl"
//console.log(me)

//const hobbies = ["codeing", "breathing"];
//hobbies.pop();
//hobbies.push("eating")
//console.log(hobbies)

//const jsObject = {
   // whatAmI: "jsObejct"
//}

// "" vs '' vs´

console.log("I can compile")
console.log('I can compile')
const dancerName = "Computer"
// ${} syntax = string interpolation
// `` template strings
console.log(`${dancerName} I can compile"""""''''
    Line 2
    Line 3
    `)


const assignmentDescription = " ... and the value is...";
const value = 4;
// dont use + (changes value to a string)
console.log(assignmentDescription, value)
