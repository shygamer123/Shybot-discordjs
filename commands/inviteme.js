const Discord= require('discord.js')
module.exports={
  name:'inviteme',
  aliases:['invite'],

  execute(message, args){
    const invite = new Discord.MessageEmbed()
    invite.addField('Links:-',`[Support Server](https://discord.gg/chYA3dQEWw) \n [Invite me](https://discord.com/api/oauth2/authorize?client_id=933572242623856670&permissions=8&scope=bot%20applications.commands)`)
    invite.setFooter('meow🐈')
    invite.setTimestamp()
    message.channel.send(invite)
  }
}