const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "achievement",
    aliases:['ach'],
    cooldown:5,
  async execute( message, args) {
    
    const text = args.join("+");
    const e = new MessageEmbed()
      e.setTitle("MineCraft achievement!")
      e.setImage(
        `https://minecraftskinstealer.com/achievement/12/Achievement%20Get!/${text}`
      )
      e.setFooter('meow🐈')
      e.setTimestamp()
    message.channel.send(e);
  },
};