const { MessageEmbed } = require("discord.js");
const db = require('quick.db');
const client = require('../../index.js')

const ms = require("parse-ms");

module.exports = {
    name: 'reputation',
    aliases: ['rep'],
    cooldown:5,
    async execute(message, args){

      let member = message.author;
      db.add(`commands_${member.id}`,1)
      
        let timeout = 86400000;
        let amount = 1;
        let user = message.mentions.users.first() ||message.author 

      if(!user){
        message.reply("You didn't mention someone.")
      }
      let rep =  await db.fetch(`dailyrep_${member.id}`)
        if(rep !== null && timeout - (Date.now() - rep) > 0) {
            let time = ms(timeout - (Date.now() - rep))

            const repEmbed = new MessageEmbed()
            .setDescription(`You have already given/collected some reputation!,\n wait ${time.hours}h, ${time.minutes}m and ${time.seconds}s to give it again !`)
            .setColor("RANDOM")

            return message.channel.send(repEmbed)
        } else {
            db.add(`rep_${user.id}`, amount)
            db.set(`dailyrep_${member.id}`, Date.now())

            const dailySuccess = new MessageEmbed()
            .setDescription(`**${user.username}** | You got a reputation from **${member.username}**! *hehehe*`)
          message.channel.send(dailySuccess)
    }
    }
}