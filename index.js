console.log('Entrando... Aguarde')

const { MessageMedia, Client, GroupNotificationTypes } = require("whatsapp-web.js")
const chalk = require("chalk");

const client = require("./src/clientStart.js")

//db reources..
const Group = require("./src/models/Group")
const { CreateGroup } = require("./src/controller/groupController")
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
    
    let msgLower = msg.body
    let chat =  await msg.getChat()

    console.log(msgLower)
    console.log("msgLower acima")
    if(msgLower == prefix + "groupID"){
        chat.sendMessage("zz")
        // msg.delete(everyone=true)
        
        //seeing chat atributes
        // console.log(chat)
        // console.log(chat.description)
        
        

        chat.sendMessage(msg.getInfo())
    }

    if(msgLower == prefix + "addGroup"){
        group = {
            "name": chat.name, 
            "group_ID": chat.id._serialized,
            "description": chat.description,
            "type": 'vendas'
        }
        CreateGroup(group)
        msg.delete(everyone=true)
    }

})

