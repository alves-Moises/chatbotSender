console.log('Entrando... Aguarde')

const client = require("./../clientStart.js")


require("./../controller/selfMessageController.js")
// require("./../controller/messageController.js")



// API resourcers..
require("./../server/app.js");    

module.exports = { client }