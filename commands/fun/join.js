  const { MessageEmbed } = require("discord.js");

  module.exports = {
      name: 'join', 
      cooldown:5,
      async execute(message, args) {
              const voiceChannel = message.member.voice.channel;
              const embed = new MessageEmbed()
              .setColor('#FF5757')
              .setDescription(`You need to be in a vc to execute this command!`)
              if(!voiceChannel) return message.channel.send(embed)
              voiceChannel.join()
              message.react('🪐')
                
            }
  }