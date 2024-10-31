const chalk = require("chalk");
const fs = require('fs')


const express = require('express');
const app = express()


const port = 8000



app.post("/test", async(req, res) => {
    const group = await req.body;
    console.log(req)
    let jsonData = JSON.stringify(req.body, null, 2)
    fs.writeFileSync('output.json', jsonData)

    console.log(group)

    const createdGroup = await Group.create(group)
    res.json(createdGroup)
})



// ===== SERVER INTIALIZATING... =====
app.listen(port, () => {
    console.log(
        `${chalk.yellow("SERVIDOR")} ${chalk.green("OK")}! }`
    )

    console.log(`PORT: ${chalk.bgRed(`${port}  `)}`)
})

