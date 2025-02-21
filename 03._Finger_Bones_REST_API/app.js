const express = require('express')
const app = express()
app.use(express.json());


const fingerbones = [
    { id: 1,
      name: "Tommeltot",
      length: 10  
    } ,
    { id: 2,
        name: "Lillefinger",
        length: 8  
    },
    { id: 3,
        name: "Langefinger",
        length: 20  
    }  
]

app.get("/fingerbones" , (req,res) =>{
    res.send({data : fingerbones})
})

app.get("/fingerbones/:id", (req, res) => {
    const fingerBoneId = Number(req.params.id);
    const foundFingerBones = fingerbones.find((fingerBone) => fingerBone.id === fingerBoneId);
    
    if (!foundFingerBones) {
        res.status(404).send({ error: `No fingerbone found with id ${fingerBoneId}` });
    } else {
        res.send({ data: foundFingerBones });
    }
});


app.post("/fingerbones",(req,res) =>{
const { name, length} = req.body;
const id = fingerbones.length +1;

const createdFingerbone = {id, name, length} ;
fingerbones.push(createdFingerbone)
res.status(201).send({data: createdFingerbone})
});


app.delete("/fingerbones/:id", (req, res) => {
    const fingerBoneId = Number(req.params.id);
    const index = fingerbones.findIndex((fingerbone) => fingerbone.id === fingerBoneId)
    
    fingerbones.splice(index,1);
    if (!index){
    res.send({data : `fingerbone with id ${fingerBoneId} has been deleted`})
    }
    else
    res.status(404).send({error : `no fingerbones with id :  ${fingerBoneId} found`})
});

app.put("/fingerbones/:id", (req, res) => {
    const fingerBoneId = Number(req.params.id);
    const { name, length } = req.body;
    const index = fingerbones.findIndex((fingerBone) => fingerBone.id === fingerBoneId);

    if (index === -1) {
        return res.status(404).send({ error: `No fingerbone found with id ${fingerBoneId}` });
    }
    fingerbones[index] = { id: fingerBoneId, name, length };
    res.send({ data: fingerbones[index] });
});

app.patch("/fingerbones/:id", (req, res) => {
    const fingerBoneId = Number(req.params.id);
    const { name, length } = req.body;
    const fingerBone = fingerbones.find((fingerBone) => fingerBone.id === fingerBoneId);

    if (!fingerBone) {
        return res.status(404).send({ error: `No fingerbone found with id ${fingerBoneId}` });
    }
    if (name !== undefined) fingerBone.name = name;
    if (length !== undefined) fingerBone.length = length;

    res.send({ data: fingerBone });
});



//Status codes
// 2xx - Everything went well
// 4xx - Client error
// 5xx - Server error




const PORT = 8080;

app.listen(PORT,(error) =>{
    if (error){
        console.log("Error starting the server", error)
        return;
    }
    console.log("Server is running on port " , PORT)
});
