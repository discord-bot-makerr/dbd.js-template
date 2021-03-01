const dbd = require("dbd.js")
var fs = require('fs')
const bot = new dbd.Bot({
token: "bot token goes here", 
prefix: "any prefix goes here." 
})

bot.onMessage()
var reader = fs.readdirSync("./cmds/").filter(file => file.endsWith(".js"))
for(const file of reader) {
    const command = require(`./cmds/${file}`)
bot.command({
   name: command.name,
   code: command.code
 })
}

//^^^ Commands will go to the cmds folder.

//Status

bot.status({
text: "Hello!",
type: "PLAYING",
status: "ONLINE",
time: 4
})

bot.status({
text: "the cmds folder.",
type' "WATCHING",
status: "IDLE",
time: 4
})
//For more go to this link: https://dbd.leref.ga/guide/bot-status

//Variables
bot.variables({
example: "0",
pene: "undefined"
})
