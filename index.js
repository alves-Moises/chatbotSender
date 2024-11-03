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
    
    let msgLower = msg.body.toLowerCase().trim()
    let msgSplit = msgLower.split(" ")
    let chat =  await msg.getChat()

    
    if(msgLower == prefix + "groupID"){
        
        //seeing chat atributes
        // console.log(chat)
        // console.log(chat.description)
        
        

        // chat.sendMessage(msg.getInfo())
    }

    if(msgLower.startsWith(prefix + "addgroup")){
        if(chat.isGroup == false){
            console.log(yellow(chat.name), red("não é grupo."))
            return 
        }
        group = {
            "name": chat.name, 
            "group_ID": chat.id._serialized,
            "description": chat.description,
            "type":  msgSplit.length == 2 ? msgSplit[1]  : "vendas"
        }
        msg.delete(everyone=true)
        CreateGroup(group)
    }

    
    if(msgLower.startsWith(prefix + "sbyt")){
        if(msgLower == 1){ return }
        let type = msgSplit[1]
        findGroupsByType((type))
    }

    if(msgLower == prefix + "help"){
        chat.sendMessage(Help())
    }
})

client.on("message_create", async(msg) => {
    if(msg.fromMe == false){ return }
    
    let msgLower = msg.body.toLowerCase().trim()

    if(msgLower.startsWith(prefix + "ads")){
    
        let groups = await findADSGroups()
        
        console.log(yellow("Enviando ads message..."))
        for(let i = 0; i < groups.length; i++){
            console.log(`${i}: ` + yellow(groups[i].name))
            client.sendMessage(groups[i].id, ITMessage())
        }

        msg.delete(everyone=true)
    }
})
