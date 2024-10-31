console.log('Entrando... Aguarde')

const { MessageMedia, Client, GroupNotificationTypes } = require("whatsapp-web.js")
const client = require("./src/clientStart.js")
const chalk = require("chalk");

//db reources..
const Group = require("./src/models/Group")

// API resourcers..
const { app } = require("./src/server/app")

const prefix = "?"







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
