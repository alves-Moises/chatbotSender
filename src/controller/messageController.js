const chalk = require("chalk")
const client = require("../clientStart")
const prefix = "?"

const yellow = chalk.yellow
const green = chalk.green
const red = chalk.red

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
        console.log(
            `${red(
                "Erro ao receber mensagem"
                )
            }`
        )
    }
})
