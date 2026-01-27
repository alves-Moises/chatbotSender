const client = require("../clientStart")

const { Help } = require("../default_answer")

const chalk = require("chalk");
const {
        CreateGroup,
        findGroupsByType
} = require("./groupController");

const red = chalk.red
const yellow = chalk.yellow 
const green = chalk.green 

const prefix = "?"

client.on('message_create', async (msg) =>{
    
    
    // console.log(msg)
    try{
        if(msg.fromMe == false){ return }

        var msgLower = msg.body
        
        var msgSplit = msg.body.split(" ")
        var chat =  await msg.getChat()

        console.log(msgLower)
        console.log(msgSplit)
        await chat.sendMessage(msg, {sendSeen: false})
    }catch(err){
        console.log(red(err))
        return
    }

    
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
        await msg.delete(everyone=true, {sendSeen: false})
    }

    
    if(msgLower.startsWith(prefix + "sbyt")){
        if(msgLower == 1){ return }
        let type = msgSplit[1]

        chat.sendMessage(
            findGroupsByType(type),
            {sendSeen: false}
        )
    }

    if(msgLower == prefix + "help"){
        await chat.sendMessage(Help(), {sendSeen: false})
    }
})
    