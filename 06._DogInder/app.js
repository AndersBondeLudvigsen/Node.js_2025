import express from 'express';
const app = express();

import path from 'path'
import { frontpagePage } from './util/pages.js';
import { matchesPagePage } from './util/pages.js';

import { getMatches } from './util/matches.js';

app.use(express.static("public"));





app.get("/",(req,res)=>{
    res.send(frontpagePage)
});

app.get("/matches",(req,res)=>{
    res.send(matchesPagePage)
});

app.get("/api/matches", async (req,res)=>{
    const matches = await getMatches();
    res.send({ data : matches })
})


const PORT = Number(process.env.PORT) || 8080
const server = app.listen(PORT, () => console.log("Server is running on port", server.address()))