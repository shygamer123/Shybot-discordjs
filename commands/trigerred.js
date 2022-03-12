
const  Random = require("srod-v2");
const Discord = require("discord.js");

module.exports = {
  name: "triggered",
  async execute( message, args){
    
    const Member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;
    const Data = await Random.Triggered({ Image: Member.user.displayAvatarURL({ format: "png" }), Color: "RANDOM" });

    return message.channel.send(Data);
  }
};
