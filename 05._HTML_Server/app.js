//const express = require('express')
//const { parties } =  require('./util/partiesLibary.js')
// console.log(parties)
import express from 'express';
import path from 'path';
import partiesLibaryESModules from './util/partiesLibaryES.js';


const app = express()

// Sikkerheds feature, bruges til at tilgå public
app.use(express.static('public'))

let visitorCount = 0;


app.get("/", (req,res)=>{
res.sendFile(path.resolve("public/frontpage/index.html"));
})

app.get("/partypage", (req,res)=>{
    res.sendFile(path.resolve("public/partypage/Partypage.html"))
})







// task create a route /visitourcouunts that returns the visitorcount

app.get("/visitorscounts", (req,res)=>{
visitorCount ++;
    res.send({data:visitorCount})
})






const PORT = 8080
app.listen(PORT, () => console.log("Server is running on port", PORT))
