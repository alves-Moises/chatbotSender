const chalk = require("chalk");

const app = require("./routes/api.js")
const port = 8000
const ip = "192.168.10.20"


// ===== SERVER INTIALIZATING... =====
app.listen(port, () => {
    console.log(
        `${chalk.yellow("SERVIDOR")} ${chalk.green("OK")}! `
    )

    console.log(`PORT: ${chalk.bgRed(`${port}  `)}`)
})

module.exports = { app }