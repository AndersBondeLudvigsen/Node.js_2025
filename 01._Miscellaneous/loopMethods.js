// forEach, map, filter, reduce, findIndex, find 
// undgå forEach
const myNumbers = [1,2,3,4,5,6];

// assignment: get a list of double the numbers
// mapper en til en
const doubleNumbers = myNumbers.map( (myNumber) => myNumber*2);

console.log(doubleNumbers)

const satellites = [
    {
        name: "International Space Station",
        height: 12000
    },
    {
        name: "MIR",
        height:0
    },
    {
        name:"James Webb",
        height: 27000

    }
];
//assignment: lower the height for all satellitet by 3.000 execpt for MIR
const newHeightSatellites = satellites.map((satellite) =>({
    height: satellite.name === "MIR" ? satellite.name : satellite.height -3000,
    name: satellite.name
}));
console.log(newHeightSatellites)


// make it turn thumbs up
const listOfReactions = ["thumbs down","thumbs down","thumbs down"]
    
const thumbsUp = listOfReactions.map((finger) => "thumbs up")
console.log(thumbsUp)
