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
        if(msg.fromMe == false) return 

        msg.body.includes("Alves") ? console.log(msg.body) : ""
        var msgSTR = msg.body.toString()

        if(!msgSTR.startsWith(prefix)) return
    
    }catch(err){
        console.log(red(err))
        return
    }

    var msgLower = msgSTR.toLowerCase()
    var msgSplit = msgSTR.split(" ")
    var chat =  await msg.getChat()

    if(msgLower == prefix + "groupid"){
        await chat.sendMessage(chat.id._serialized, { sendSeen: false })
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
    