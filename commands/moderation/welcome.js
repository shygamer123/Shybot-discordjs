const db= require('quick.db')
module.exports={
  name:'welcome',
  aliases:['wel'],
  async execute(message, args){
   const channel = message.mentions.channels.first();
    if (!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send(`You are missing the **MANAGE GUILD** permission!`)
    if (!channel)
      return message.channel.send(
        "Invalid Channel, Please mention a channel!!"
      );
    db.set(`wel_${member.guild.id}`,`${channel.id}`);
    message.channel.send(`welcome channel set to ${channel}!`); 
  }
}