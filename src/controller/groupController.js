const Group = require("../models/Group");
const chalk = require("chalk")
async function CreateGroup(groupData) {
    let name = groupData.name 
    let chatID = groupData.group_ID
    let desc = groupData.description
    let type = groupData.type
    data = {
        "name": name,
        "group_id": chatID,
        "description": desc
    }
    groupExist = await Group.getGroup(chatID)
    await console.log(groupExist[0])
    if(groupExist[0] == 0){
        Group.create(data)

        console.log(`${chalk.yellow("GROUP INFO:")}`)
        console.log(`  ${chalk.blackBright("Name")}: ${name}`)
        console.log(`  ${chalk.blackBright("Desc")}: ${desc}`)
        console.log(`  ${chalk.blackBright("Type")}: ${type}`)
        console.log(chalk.yellow("Grupo adicionado com " + chalk.green("SUCESSO!")))
    }else{
        console.log(`${chalk.red("FAlha ao ciar grupo.")}`)
        console.log(`Grupo ${name} já existe`)
    }

}

module.exports = { CreateGroup }