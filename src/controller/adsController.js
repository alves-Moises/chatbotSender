const client = require("../clientStart")
// const { MessageMedia, } = require("whatsapp-web.js")

const { sendTexts } = require("../default_answer")

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
        var timeStartMsg = Date.now()
        await client.sendMessage(
            groups[i].id, 
            sendTexts[text]()
        ).then(
            (res) => {
                var timeEnd = Date.now()
                var timeTotalMsg = (timeEnd - timeStartMsg) / 1000
                console.log(
                    res
                )
                console.log(
                    green("Message sent!"), 
                    yellow(timeTotalMsg), 
                    "secconds."
                )
            }
        )
    }
    let timeFinal = Date.now()
    let totalTime = (timeStart - timeFinal) / 1000
        console.log(
            green(`
                ===========
                Succes! ${groups.length} groups
                ${totalTime} secs
                ============
            `)


        )
}

module.exports = {sendGroupsMessage}