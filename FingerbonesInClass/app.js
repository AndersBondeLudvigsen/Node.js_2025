const express = require('express')
const app = express()
app.use(express.json())

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
let nextId = 4


app.get("/fingerbones" , (req,res) =>{
    res.send({data : fingerbones})
})



app.get("/fingerbones/:id", (req, res) => {
    const providedFingerBoneId = Number(req.params.id);
    const foundFingerBones = fingerbones.find((fingerBone) => fingerBone.id === providedFingerBoneId);
    
    if (!foundFingerBones) {
        res.status(404).send({ error: `No fingerbone found with id ${providedFingerBoneId}` });
    } else {
        res.send({ data: foundFingerBones });
    }
});



app.post("/fingerbones", (req,res)=>{
    const newFingerBone = req.body;
    newFingerBone.id = nextId++;
    fingerbones.push(newFingerBone);
    res.send({data: newFingerBone})
})



app.patch("/fingerbones/:id",(req,res)=>{
    const providedFingerBoneid = Number(req.params.id);
    const foundFingerBoneIndex = fingerbones.findIndex((fingerbone) => fingerbone.id === providedFingerBoneid)
    
    if(foundFingerBoneIndex === -1){
        res.status(404).send({error: `No fingerbone found with id ${providedFingerBoneid}`})
    }else {
        const existingFingerBone = fingerbones[foundFingerBoneIndex]

        const newFingerBone = {...existingFingerBone,...req.body, id: existingFingerBone.id};

        fingerbones[foundFingerBoneIndex] = newFingerBone;

        res.send({data: newFingerBone});
    }
})




app.delete("/fingerbones/:id",(req,res)=>{
    const providedFingerBoneid = Number(req.params.id);
    const foundFingerBoneIndex = fingerbones.findIndex((fingerbone) => fingerbone.id === providedFingerBoneid)
   
    if(foundFingerBoneIndex === -1){
        res.status(404).send({error: `No fingerbone found with id ${providedFingerBoneid}`})
    }else {
        fingerbones.splice(foundFingerBoneIndex,1)
        res.status(204).send();
    }
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
