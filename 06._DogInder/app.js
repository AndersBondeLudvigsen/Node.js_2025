import express from 'express';
const app = express();

import path from 'path'

app.use(express.static("public"));

app.get("/",(req,res)=>{
    res.sendFile(path.resolve('public/frontpage/frontpage.html'))
});

app.get("/matches",(req,res)=>{
    res.sendFile(path.resolve('public/matches/matches.html'))
});



const PORT = Number(process.env.PORT) || 8080
const server = app.listen(PORT, () => console.log("Server is running on port", server.address()))