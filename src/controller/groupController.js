const Group = require("../models/Group");
const chalk = require("chalk")
const red = require("chalk")
const green = require("chalk")
const yellow = require("chalk")

async function CreateGroup(groupData) {
    data = {
        "name": groupData.name ,
        "group_id": groupData.group_ID,
        "description": groupData.description,
        "type": groupData.type
    }

    groupExist = await Group.getGroup(data.group_id)
    // await console.log(groupExist[0])

    if(groupExist[0] == 0){
        let descSubstr = ""
        try {
            descSubstr = data.description.substring(0, 200)
        } catch (err) {
            console.log(chalk.red("Error to catch desc."), chalk.yellow(err))
            
        }
        Group.create(data)

        console.log(`${chalk.yellow("GROUP INFO:")}`)
        console.log(`  ${chalk.blackBright("Name")}: ${data.name}`)
        console.log(`  ${chalk.blackBright("Desc")}: ${descSubstr}`)
        console.log(`  ${chalk.blackBright("Type")}: ${data.type}`)
        console.log(chalk.yellow("Grupo adicionado com " + chalk.green("SUCESSO!")))
    }else{
        console.log(`${chalk.red("FAlha ao ciar grupo.")}`)
        console.log(`Grupo ${data.name} já existe`)
    }
}

async function findGroupsByType(Type = "vendas"){
    let groups = await Group.getGroupByType(Type)
    let arrGroups = groups[0]
    let id_groups = []
    
    

    for(let i = 0; i < arrGroups.length; i++){
        id_groups.push(arrGroups[i].name)
    }
    console.log(yellow("SearchByID: ") + id_groups)
    return id_groups
}

async function findADSGroups(){

    let groups = await Group.getGroupByType("vendas")
    let arrGroups = groups[0]
    let id_groups = []
    
    
    
    for(let i = 0; i < arrGroups.length; i++){
        id_groups.push({
                "id": arrGroups[i].group_id, 
                "name": arrGroups[i].name
            })
    }
    return id_groups

}

module.exports = { CreateGroup, findGroupsByType, findADSGroups }