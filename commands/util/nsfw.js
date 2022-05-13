const Color = "RANDOM";
const Discord = require("discord.js");
const client= require('../../index.js')

module.exports = {
  name: "nsfw",
  async execute( message, args)  {  
if (!message.channel.nsfw) return message.channel.send("Noo, it's not a nsfw channel.")

    const nsfw= new Discord.MessageEmbed()

    nsfw.addField('Only 18+','`4k` `anal` `ass` `boobs` `hanal` `hass` `hboobs` `hentai` `hkitsune` `hmidriff` `hneko` `holo` `kemonomimi` `neko` `pgif` `pussy` `yaoi`')
 message.channel.send(nsfw)
  
  }
}