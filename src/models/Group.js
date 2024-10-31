const db = require('../db/database')

const Group = {
    //table: groups
    async create(groupData) {
        let name = groupData.name 
        let group_id = groupData.group_id
        const query = `INSERT INTO groups (name, group_id) VALUES ('${name}', '${group_id}')`;

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
    }
}
    
module.exports = Group