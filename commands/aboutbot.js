const discord =require('discord.js');
module.exports={
  name:"aboutbot",
  aliases:['ab'],
execute(message, args){
const about = new discord.MessageEmbed()
about.setAuthor(`${message.author.tag}`, message.author.avatarURL())
about.addField('Important:-',"This bot is good for moderation and you privacy, This bot won't harm..\nIt uses Database names MongoDB which won't leak any of your personal data, we don't share your data to anyone else. \n We don't have any harmful commands which can nuke or kick people, Bot is safe for all this things, If you wanna report you join out support server")
about.setFooter('meow🐈')
about.setTimestamp()
message.channel.send(about);
  }
}