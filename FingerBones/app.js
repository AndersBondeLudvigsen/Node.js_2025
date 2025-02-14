const express = require('express');
const app = express();

const fingerbones = ["Tommeltot", "Langefinger", "Lillefinger"];

app.get("/fingerbones", (req, res) => {
    res.send({ data: `All fingerbones: ${fingerbones}` });
});

app.get("/fingerbones/:id", (req, res) => {  
    const id = req.params.id; 
    const fingerbone = fingerbones[id];
    if(fingerbone){
        res.send({ data: `One fingerbone: ${fingerbone}` });

    } else{
        res.status(404).send({ error: "Fingerbone not found" })    }
});

app.listen(8080)
