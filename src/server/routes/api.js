const express = require('express');
const app = express()

const Group = require('../../models/Group')

//=== Middleware ==
const bodyParser = require('body-parser');

const { sendGroupsMessage } = require('../../controller/adsController');
const { createdGroup } = require("../../controller/groupController")
const { messageList } = require('../../default_answer');

app.use(bodyParser.json());
app.use(express.static("public"))
// app.use(express.urlencoded({extended: true}));


//=== ROUTES ===

app.get("/", async (req, res) =>  {
    console.log("rota...")
    catList = await  Group.getCategoryList()
    
    data = {
        ...messageList,
        "catList": catList
    }
    res.render('index', data); // Renderiza o template 'index.ejs'
})

app.get("/custom-message/:msg", (req , res) => {
    console.log(req.params.msg)

    res.statusCode(200)
}) 

app.get("/send/:group_type/:text", async (req, res) => { 
    console.log(req.params["group_type"])
    await sendGroupsMessage(
        req.params["group_type"], 
        req.params["text"]
    )
    res.render('success-create')
})




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
