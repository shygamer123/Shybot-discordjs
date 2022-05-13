const discord =require('discord.js');
module.exports={
  name:"support",
    cooldown:5,
execute(message, args){
const vote = new discord.MessageEmbed()
vote.setColor('RANDOM')
vote.setAuthor(`${message.author.tag}`, message.author.avatarURL())
vote.addField('Also Support us by joining our premium perks, Join our server to learn more.',`https://discord.gg/qYUBjMcfaU`)
vote.setFooter('meow🐈')
vote.setTimestamp()
message.channel.send(vote);
  }
}