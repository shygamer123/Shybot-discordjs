
const Discord = require("discord.js");

module.exports = {
  name: "avatar",
    aliases:['av'],
    cooldown:5,
 async execute(message, args) {
    
    const Member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;
    const Gif = Member.user.displayAvatarURL({ format: "gif" }), Webp = Member.user.displayAvatarURL({ format: "webp" }), Png = Member.user.displayAvatarURL({ format: "png" }), Jpg = Member.user.displayAvatarURL({ format: "jpg" })

    const Embed = new Discord.MessageEmbed()
    .setColor("random")
    .setDescription(`[Png](${Png}) - [Gif](${Gif}) - [Webp](${Webp}) - [Jpg](${Jpg})`)
    .setImage(Member.user.displayAvatarURL({ dynamic: true }))
   .setFooter('meow🐈')
.setTimestamp()

    return message.channel.send(Embed);
  }
};
