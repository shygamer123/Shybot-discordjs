const Discord = require('discord.js')
const rgx = /^(?:<@!?)?(\d+)>?$/;
const client= require('../../index.js')

module.exports = {
    name: "stop",

    async execute(message, args) {
        
        if (message.author.id !== '840244590870003762') {
            return;
        }
        
        await message.channel.send(`👍 Bot is now turned off !!`)
        process.exit()
    }
}