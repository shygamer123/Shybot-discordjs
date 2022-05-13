const Discord = require('discord.js')
module.exports={
  name:'membercount',
  aliases:['mc'],
    cooldown:5,
  execute(message, args){

    const mc = new Discord.MessageEmbed();
    mc.addField(`   **${message.guild.name}**'s members count !`,`${message.guild.memberCount}`);
    mc.setColor('#ffoes')
    mc.setTimestamp();
    mc.setFooter('meow🐈')
    mc.setTimestamp()
    message.channel.send(mc);
  }
}