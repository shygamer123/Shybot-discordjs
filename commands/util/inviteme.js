const Discord= require('discord.js')
module.exports={
  name:'inviteme',
    cooldown:5,
  aliases:['invite'],

  execute(message, args){
    const invite = new Discord.MessageEmbed()
    invite.setDescription(`[Invite me](https://discord.com/api/oauth2/authorize?client_id=961214446141837402&permissions=8&scope=bot%20applications.commands)`)
    invite.setFooter('meow🐈')
    invite.setTimestamp()
    message.channel.send(invite)
  }
}