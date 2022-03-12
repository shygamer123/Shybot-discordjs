const discord =require('discord.js');
module.exports={
  name:"support",
execute(message, args){
const vote = new discord.MessageEmbed()
vote.setColor('RANDOM')
vote.setAuthor(`${message.author.tag}`, message.author.avatarURL())
vote.addField('https://discord.gg/chYA3dQEWw','Bot community')
vote.addField('https://discord.gg/6N3nyzaHsT','Gaming Comunity')
vote.setFooter('meow🐈')
vote.setTimestamp()
message.channel.send(vote);
  }
}