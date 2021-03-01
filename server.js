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

\\^^^ Commands will go to the cmds folder.

\\Status
