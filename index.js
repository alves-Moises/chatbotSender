console.log('Entrando... Aguarde')

const { MessageMedia, Client, GroupNotificationTypes } = require("whatsapp-web.js")

const chalk = require("chalk");
const red = chalk.red
const yellow = chalk.yellow 
const green = chalk.green 

const client = require("./src/clientStart.js")

//db reources..
const Group = require("./src/models/Group")
const { CreateGroup, findGroupsByType, findADSGroups } = require("./src/controller/groupController")

// API resourcers..
const { app } = require("./src/server/app");
app.get("/ads", (req, res) => { 
    ADS()
    res.render('success-create')
})

const { Help, ITMessage } = require("./src/default_answer.js");


const prefix = "?"



const  ADS = async () => {
    let groups = await findADSGroups()
    console.log(yellow("Enviando ads message..."))
    for(let i = 0; i < groups.length; i++){
        console.log(`${i}: ` + yellow(groups[i].name))
        await client.sendMessage(groups[i].id, ITMessage())
    }
        console.log(green(`Succes! ${groups.length} groups`))
}




client.on("message", async (msg) => {
    let msgLower = await msg.body.toLocaleLowerCase().trim()
    let from = await msg.from 
    let user = await msg.getContact()
    let user_name = await user.pushname
    let chat = await msg.getChat()
    
    if(msgLower == prefix + "ping"){
        msg.reply('pong')
        console.log(`pong... ${chalk.yellow(`${user_name}`)}`)
    }

    // just for debbuging...
    try{
        let data = new Date(msg.timestamp * 1000);

        let dataFormatada = data.toLocaleDateString('pt-BR', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit'
        });
        console.log(yellow("\nMensagem recebida..."))
        await console.log(`${green(dataFormatada)} || ${yellow(chat.name)} || \n${msgLower.slice(0, 100)}`)
    }catch{
        console.log(`${red("Erro ao receber mensagem")}`)
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
        await msg.delete(everyone=true)
        CreateGroup(group)
    }

    
    if(msgLower.startsWith(prefix + "sbyt")){
        if(msgLower == 1){ return }
        let type = msgSplit[1]
        findGroupsByType((type))
    }

    if(msgLower == prefix + "help"){
        await chat.sendMessage(Help())
    }
})

client.on("message_create", async(msg) => {
    if(msg.fromMe == false){ return }
    
    let msgLower = msg.body.toLowerCase().trim()

    if(msgLower.startsWith(prefix + "ads")){
    
        ADS()

        msg.delete(everyone=true)
    }
})
