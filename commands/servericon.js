const Discord = require('discord.js');
const client= require('../index.js')
module.exports = {
    name: "servericon",
    aliases:['sicon'],
    async execute ( message, args){
        
        const embed = new Discord.MessageEmbed()

        .setTitle(`${message.guild.name}'s Icon !!`)
        .setImage(message.guild.iconURL({ dynamic: true, size: 1024 }))
        .setFooter(message.member.displayName,  message.author.displayAvatarURL({ dynamic: true }))
        .setTimestamp()
        .setColor(message.guild.me.displayHexColor)


        message.channel.send(embed)
    }
}