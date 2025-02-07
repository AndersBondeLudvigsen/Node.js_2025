

console.log (getRandomInt(0,10))

function getRandomInt(min,max){
    return Math.floor(Math.random() * (max +1) - min);
}


const getRandomIntAnobomousFunction = function (min,max){
    return Math.floor(Math.random() * (max +1) - min);
};

const getRandomIntArrowFunction =  (min,max) => {
    return Math.floor(Math.random() * (max +1) - min);
};
        // action is a callback function
        // a callback is a function that is passed as a parameter to anotrher function
        //possibly with the aim of calling it later
        // name: string    action: function
function genericPerformer(name, action){
    return action(name);
}

// Lasee codeing

const codeingAction = (name) => `${name} likes codeing `;

console.log(genericPerformer("lasse", codeingAction))

// Andreas sleeping

function sleepingAction(name){
    return `${name} loves sleeping`;
}

// Desired result Andreas loves sleeping

console.log(sleepingAction("Andreas"))
console.log(genericPerformer(`Andreas`, sleepingAction));

// tara boxing

// Desired result : tara owns at boxing

console.log(genericPerformer(`tara`,(name) => `${name} owns at boxing`))