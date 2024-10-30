const express = require('express');
const app = express()
const Group = require('../../models/Group')

//=== ROUTES ===

app.get("/", (req, res) => {
    return "Hello word"
})

// add group
app.post("/add_group", async(req, res) => {
    const group = req.body;
    console.log(req)

    const createdGroup = await Group.create(group)
    res.json(createdGroup)
})

//list groups
app.get("/groups", async(req, res) => {
    const groups = await Group.list()
    res.json(groups)    
})

//rdelete
app.delete("/del_group/:id", async (req, res) =>{
    const id = req.params.id
    await Group.delete(id)
    res.status(204).send("Exluído com sucesso.")
})

module.exports =  app 