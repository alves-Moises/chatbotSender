const client = require("../clientStart")

const { Help } = require("../default_answer")

const chalk = require("chalk");
const { CreateGroup, findGroupsByType } = require("./groupController");
const red = chalk.red
const yellow = chalk.yellow 
const green = chalk.green 

const prefix = "?"

client.on('message_create', async (msg) =>{
    if(msg.fromMe == false){ return }
    
    let msgLower = msg.body.toLowerCase().trim()
    let msgSplit = msgLower.split(" ")
    let chat =  await msg.getChat()

    
    if(msgLower == prefix + "groupid"){
        chat.sendMessage(chat.id._serialized)
        
        //seeing chat atributes
        // console.log(chat)
        // console.log(chat.description)
        
        

    }

    if(msgLower.startsWith(prefix + "addgroup")){
        if(chat.isGroup == false){
            console.log(
                yellow(chat.name), 
                red("não é grupo.")
            )
            return 
        }
        group = {
            "name": chat.name, 
            "group_ID": chat.id._serialized,
            "description": chat.description,
            "type":  msgSplit.length == 2 
                ? msgSplit[1] 
                : "vendas"
        }
        CreateGroup(group)
        await msg.delete(everyone=true)
    }

    
    if(msgLower.startsWith(prefix + "sbyt")){
        if(msgLower == 1){ return }
        let type = msgSplit[1]
        findGroupsByType(type)
    }

    if(msgLower == prefix + "help"){
        await chat.sendMessage(Help())
    }
})
    