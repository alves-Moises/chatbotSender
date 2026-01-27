const {
	Client,
	LocalAuth,
} = require('whatsapp-web.js');

const chalk = require("chalk");
const wwebVersion = '2.2412.54';
const qrcode = require("qrcode-terminal")


// -+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
// -+-+-+-+
// -+-+-+-+ AUTHOR:     Moisés Alves
// -+-+-+-+ GITHUB:     https://github.com/alves-Moises/ 
// -+-+-+-+ LINKEDIN:   https://www.linkedin.com/in/moises-alves-b1272a204/
// -+-+-+-+ CONTACT ME:    https://linktr.ee/alves_moises
// -+-+-+-+ 
// -+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+

console.log(chalk.yellow("Iniciando..."))
const client = new Client({
    authStrategy: new LocalAuth({
		puppeteer: {
			// headless: true,
			args: [
			'--no-sandbox',
            '--disable-setuid-sandbox',
            '--disable-dev-shm-usage',
            '--disable-gpu']
		},
		clientId: "alves_bot",
		webVersionCache: {
			type: 'remote',
			remotePath: `https://raw.githubusercontent.com/wppconnect-team/wa-version/main/html/${wwebVersion}.html`,
		},
	}),
	browserName: "Chrome",
	deviceName: "xxx"
})

client.initialize()

client.on("qr", (qr) => {
	qrcode.generate(qr, { small: true })
})

client.on('loading_screen', (percent, message) => {
	console.log(`Loading...${percent}% ${message}`);
});


client.on("auth_failure", (msg) => {
	console.error(chalk.red("Auth failed"), msg)
})

client.on("disconnected", (reason) => {
	console.log("Client was logged out... ", reason)
})	



client.on("ready", () => {	
	console.log(chalk.green("Programa On-line"))
	// console.log(getChats())
});


module.exports = client