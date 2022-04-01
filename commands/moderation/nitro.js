
const Discord = require("discord.js");
const db = require("quick.db");
const client= require('../../index.js')
  
module.exports = {
  
  name: "nitro-emojis",
  aliases: ['nitro'],
  async execute( message, args){

   if(!message.member.hasPermission('ADMINISTRATOR')) return;
   if(db.fetch(`nitroemoji_${message.guild.id}`) == true) {
          var aembed = new Discord.MessageEmbed()
   .setDescription(" **Successfull** ")
   .addField("Now Nitro Emojis:", "Disabled")
   message.channel.send(aembed);
   } else {
       db.set(`nitroemoji_${message.guild.id}`, true)
           var aembed = new Discord.MessageEmbed()
   .setDescription(" **Successfull** ")
   .addField("Now Nitro Emojis:", "Enabled")
   message.channel.send(aembed);
   }

  }
}