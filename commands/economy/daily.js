const db = require('quick.db');
const ms = require("parse-ms");
const { MessageEmbed } = require("discord.js");
const client = require('../../index.js')

module.exports = {
    name: 'daily',
  cooldown:'10',
  
    async execute( message, args) {
        let timeout = 86400000;
        let amount = 1000;
        let user = message.author

        let daily =  await db.fetch(`daily_${user.id}`)
        if(daily !== null && timeout - (Date.now() - daily) > 0) {
            let time = ms(timeout - (Date.now() - daily))

            const dailyEmbed = new MessageEmbed()
            .setDescription(`You\'ve already collected your Daily cash, \n Come back in ${time.hours}h, ${time.minutes}m and ${time.seconds}s`)
            .setColor("RANDOM")

            return message.channel.send(dailyEmbed)
        } else {
            db.add(`money_${user.id}`, amount)
            db.set(`daily_${user.id}`, Date.now())

            const dailySuccess = new MessageEmbed()
            .setDescription(`You got \$${amount} as Your Daily Cash`)
            .setColor("RANDOM")

            message.channel.send(dailySuccess)
        }
    }
}