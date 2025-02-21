const express = require('express')

const app = express()

console.log(new  Date()) // UTC

console.log(Date()) // Local date time (CEST for us)

console.log(Date.now()) // Unix time / epoch (Seconds since 1970 Jan. 1st)


// assignment: Create a route called /months which returns the current month as a response
//v1
app.get("/months", (req,res)=>{
    date = new Date()
    const currentMonth = date.toLocaleString('en-US', { month: 'long' });

    res.send({month: currentMonth })
})

//v2
const months = ["January", "February", "March", "April", "May", "June", "July", 
    "August", "September", "October", "November", "December"];


app.get("/monthsv2",(req,res)=>{
    
        const currentMonth = months[new Date().getMonth()];
        res.send({date: currentMonth})
})    

//v3

app.get("/monthsv3",(req,res) =>{
    const currentMonth = Date().split(" ")[1];

    res.send({data: currentMonth})
})


//assignment implemment /dats that returns the weekday as a word

app.get("/days",(req,res)=>{
    const currentday = Date().getDay.split(" ")[0];
    res.send({data: currentday})
})


const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

app.get("/daysv2", (req,res)=>{
    const currentday = days[new Date().getDay()];

    res.send({data: currentday})
})


const PORT = 8080
app.listen(PORT, () => console.log("Server is running on port", PORT))



