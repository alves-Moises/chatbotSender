console.log('Entrando... Aguarde')

const { MessageMedia, Client, GroupNotificationTypes } = require("whatsapp-web.js")
const client = require("./src/clientStart.js")
const chalk = require("chalk");

//db reources..
const Group = require("./src/models/Group")

const prefix = "?"

// initalizating routes...
const express = require('express');
const app = express()
const port = 3000


//=== ROUTES ===

app.get("/", (req, res) => {
    return "Hello word"
})

// add group
app.post("/add_group", async(req, res) => {
    const group = req.body;
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

// ===== SERVER INTIALIZATING... =====
app.listen(port, () => {
    console.log(`${chalk.yellow("SERVIDOR")} ${chalk.green("OK")}! PORT: ${chalk.bgRed(port)}`)
})

client.on("message", async (msg) => {
    let msgLower = msg.body.toLocaleLowerCase().trim()
    let from = msg.from 
    user = await msg.getContact()
    user_name = user.pushname

    
    if(msgLower == prefix + "ping"){
        msg.reply('pong')
        console.log(`pong... ${chalk.yellow(`${user_name}`)}`)
    }
})

client.on('message_create', async (msg) =>{
    if(msg.fromMe == false){ return }
    let msgLower = msg.body.toLocaleLowerCase().trim()
    console.log(msg)
    console.log(msgLower)
    msg.reply(msg)
})