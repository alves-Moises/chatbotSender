const db = require('../db/database')

const Group = {
    //table: groups
    async create(group) {
        console.log(group)
        const query = "INSERT INTO groups VALUES ?";
        await db.execute(query, group);
        return group;
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