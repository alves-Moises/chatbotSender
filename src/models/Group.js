const db = require('../db/database')

const Group = {
    //table: groups
    async create(groupData) {
        let name = groupData.name 
        let group_id = groupData.group_id
        let description = groupData.description
        let type = groupData.type
        const query = `INSERT INTO groups (name, group_id, description, type) VALUES ('${name}', '${group_id}', '${description}', '${type}')`;

        await db.execute(query);
        return groupData;
    },

    async list(){
        const query = "SELECT * FROM groups";
        const [groups] = await db.execute(query);
        return groups[0];
    },

    async delete(ID){
        const query = "DELETE FROM groups WHERE id = ?"
        await db.execute(query, [ID])
    },

    async getGroup(ID){
        const query = `SELECT * FROM groups WHERE group_id = '${ID}'`
        const group = await db.execute(query)
        return group
    },
    async getGroupByType(Type){
        const query = `SELECT * FROM groups WHERE type = '${Type}'`
        const groups = await db.execute(query)
        return groups
    }
}
    
module.exports = Group