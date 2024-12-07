require("./database/module")

//GLOBAL PAYMENT
global.storename = "I T S M E"
global.dana = "12397445120"
global.qris = "https://i.ibb.co/BnYRXcw/STINGER-V4.jpg"


// GLOBAL SETTING
global.owner = "12397445120"
global.namabot = " I T S M E"
global.nomorbot = "12397445120"
global.namaCreator = "I T S M E"
global.linkyt = ""
global.autoJoin = false
global.antilink = true
global.versisc = '4.0.2'

// DELAY JPM
global.delayjpm = 5500

// SETTING PANEL
global.apikey = 'PLTC'
global.capikey = 'PLTA'
global.domain = 'https://domain.com'
global.eggsnya = '15'
global.location = '1'



//GLOBAL THUMB

global.codeInvite = ""
global.imageurl = 'https://i.ibb.co/BnYRXcw/STINGER-V4.jpg'
global.isLink = ''
global.packname = "I T S M E"
global.author = "I T S M E"
global.jumlah = "3"


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})
