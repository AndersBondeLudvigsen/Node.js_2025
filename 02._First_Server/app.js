const express = require('express');
const app =  express();
app.use(express.json());

app.get("/", (req, res) =>{
res.send({ data: "This is the root route" });
});

app.get("/blablabla", (req, res) =>{
    res.send({ data: "This is the blablabla route" });
    });


console.log(__dirname)

 app.get("/welcomepage", (req,res) =>{
    res.sendFile(__dirname + `/index.html`);
 })   

   
app.get("/blablablabla", (req, res) =>{
    res.send({ data : "THIS IS ONEMOREBLA" })
})    

app.get("/yourfavoritenumber",(req,res) =>{
    res.send ({ data : "My favorite number is 6"})
})

app.get("/yourfavoritenumber:number",(req,res) =>{
    
    console.log(req.params.number)
    res.send ({ data: `Your favorite number is: ${req.params.number}` })
})

const functionRefrence = (req, res)=>{
    res.send ({data: `Your favorite number is: ${req.params.favoritenumber}`})
};
app.get("yourfavoritenumber/:favoritenumber", functionRefrence)


// assignment implement / favoirtethings that allows the client to define a favoirite flower and animal

const functionRefrenceFlowerAndAnimal = (req, res) => {
    const flower = req.params.flower;
    const animal = req.params.animal;
    res.send({ data: `My favorite flower is: ${flower} and my favorite animal is: ${animal}` });
}

app.get("/favorite/:flower/:animal", functionRefrenceFlowerAndAnimal);



app.get("/favoritethings/:flower/:animal", (req, res) => {
    res.send({ data: `Favorite things are ${req.params.flower} and favorite animal is ${req.params.animal}` });
});




// Sende data med querystring og pathvaruble med GET

app.get("/search" , (req,res)=>{
    console.log(req.query)
    res.send({ data: `You have seached for: ${req.query.q}`})
});




app.post("/favoritepoliticians",(req,res) =>{
    console.log(req.body);
  
    res.send( {data:req.body} )
});



// assignment create a new route and send some data to it throgh the body

app.post("/aleksandersmor", (req,res) =>{
    console.log(req.body)
    res.send({data : req.body})
})




app.listen(8080);
