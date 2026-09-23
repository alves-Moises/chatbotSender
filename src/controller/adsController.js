const client = require("../clientStart.js")
// const { MessageMedia, } = require("whatsapp-web.js")

const { messageList } = require("../default_answer")

const { findGroupsByType } = require("./groupController")

const chalk = require("chalk")
const yellow = chalk.yellow
const green = chalk.green


const  sendGroupsMessage = async (type, text) => {
    let groups = await findGroupsByType(type)
    let timeStart = Date.now()

    console.log(yellow(`Enviando ${type} message...`))
    for(let i = 0; i < groups.length; i++){
        console.log(`${i}: ` + yellow(groups[i].name))

        let timeStartMsg = Date.now()
        let try_count = 0
        while(true){
            try{
                const state = await client.getState()
                if(state!== "CONNECTED"){
                    throw new Error("Não tá conectado")
                }
                await client.sendMessage(
                    groups[i].id, 
                    messageList[text](),
                    { sendSeen: false }
                )
                break
            }
            catch(err){
                try_count++
                console.log(
                    yellow(`[${try_count}] erro ao enviar ADS: `), 
                    red(err)
                )
                await new Promise(r => setTimeout(r, 1000))
                if(try_count>5){
                    console.log(yellow("Skipping.."))
                    break
                }
                continue
            }
        }
            
        var timeEnd = Date.now()
        var timeTotalMsg = (timeEnd - timeStartMsg) / 1000
            
        console.log(
            green("Message sent!"), 
            yellow(timeTotalMsg), 
            "secconds."
        )
    
        
    }
    
    let timeFinal = Date.now()
    let totalTime = (timeFinal - timeStart) / 1000
    console.log(
        green(`
            ===========
            Succes! ${groups.length} groups
            ${totalTime} secs
            ============
        `)


    )
}

module.exports = { sendGroupsMessage }