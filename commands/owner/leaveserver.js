const Discord = require('discord.js')
const rgx = /^(?:<@!?)?(\d+)>?$/;
const client= require('../../index.js')

module.exports = {
  name: "leaveserver",
    aliases:['ls'],

  async execute(message, args) {

    if (message.author.id !== '840244590870003762') {
    return;
    }

    const guildId = args[0] || message.guild;
    if (!rgx.test(guildId))
    return;

    const guild = message.client.guilds.cache.get(guildId);

    if (!guild) return;
    await guild.leave();

    await message.channel.send(`👍 Left the guild **\`${guild.name}\`** with **\`${guild.memberCount}\`** Users👋`);

  }
}