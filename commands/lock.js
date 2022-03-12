const Discord = require("discord.js");
const client= require('../index.js')

module.exports = {
   name: "lock",
    aliases:['l'],
   async execute(message, args){
     
    const mentionedMember = message.mentions.members.first()
        || message.guild.members.cache.get(args[0])
   if (!message.member.hasPermission('MANAGE_SERVER')){
   return message.channel.send("You don't have enough Permissions")
   }
   message.channel.overwritePermissions([
     {
        id: message.guild.id,
        deny : ['SEND_MESSAGES'],
     },
    ],);
   const embed = new Discord.MessageEmbed()
   .setTitle("Channel Updates")
   .setDescription(`🔒 ${message.channel} has been Locked`)
   .setColor("RANDOM")
   .setFooter('meow🐈')
   .setTimestamp()
   await message.channel.send(embed);
   message.delete();

}
}
