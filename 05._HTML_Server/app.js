const express = require('express')

const { parties } =  require('./util/partiesLibary.js')
// console.log(parties)



const app = express()

let visitorCount = 0;


app.get("/", (req,res)=>{
res.sendFile(__dirname + "/public/frontpage/index.html")
})

app.get("/partypage", (req,res)=>{
    res.sendFile(__dirname + "/public/partypage/partypage.html")
})







// task create a route /visitourcouunts that returns the visitorcount

app.get("/visitorscounts", (req,res)=>{
visitorCount ++;
    res.send({data:visitorCount})
})






const PORT = 8080
app.listen(PORT, () => console.log("Server is running on port", PORT))
