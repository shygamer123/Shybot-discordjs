const Discord = require("discord.js");
const client= require('../index.js')

module.exports = {
   name: "unlock",
    aliases:['ul'],
   async execute(message, args){
     
    const mentionedMember = message.mentions.members.first()
        || message.guild.members.cache.get(args[0])
   if (!message.member.hasPermission('MANAGE_SERVER')){
   return message.channel.send("You don't have enough Permissions")
   }
   message.channel.overwritePermissions([
     {
        id: message.guild.id,
        allow : ['SEND_MESSAGES'],
     },
    ],);
   const embed = new Discord.MessageEmbed()
   .setTitle("Channel Updates")
   .setDescription(`🔒 ${message.channel} has been Locked`)
   .setColor("RANDOM");
   await message.channel.send(embed);
   message.delete();
}
}
