const express = require('express')
const app = express()

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

//Status codes
// 2xx - Everything went well
// 4xx - Client error
// 5xx - Server error








const PORT = 8080;
app.listen(PORT);