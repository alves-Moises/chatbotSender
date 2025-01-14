const chalk = require("chalk");
const ejs = require('ejs');

const app = require("./routes/api.js")
const port = 8000
const ip = "192.168.10.20"

app.set('view engine', 'ejs'); // Define EJS como o motor de template
app.set('views', './src/views/'); // Define a pasta onde seus arquivos EJS estão

// ===== SERVER INTIALIZATING... =====
app.listen(port, () => {
    console.log(
        `${chalk.yellow("SERVIDOR")} ${chalk.green("OK")}! `
    )

    console.log(`PORT: ${chalk.bgRed(`${port}  `)}`)
})

module.exports = { app }