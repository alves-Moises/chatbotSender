const express = require('express');
const app = express()

const Group = require('../../models/Group')
const { ADS } = require("../../../index")

//=== Middleware ==
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(express.static("public"))
// app.use(express.urlencoded({extended: true}));


//=== ROUTES ===

app.get("/", (req, res) => {
    return "Hello word"
})

// app.get("/ads", (req, res) => {
//     ADS()
// })


// add group
app.post("/group", async(req, res) => {
    const group = await req.body;
    const createdGroup = await Group.create(group)
    res.json(createdGroup)
})

//list groups
app.get("/groups", async(req, res) => {
    const groups = await Group.list()
    res.json(groups)    
})

//delete
app.delete("/del_group/:id", async (req, res) =>{
    const id = req.params.id
    await Group.delete(id)
    res.status(204).send("Exluído com sucesso.")
})

module.exports =  app 
