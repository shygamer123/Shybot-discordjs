const { MessageEmbed } = require('discord.js');
const db = require('quick.db');
const client = require('../../index.js')
module.exports = {
    name: 'sell',
  cooldown:10,
    async execute( message, args){
      
      db.delte(`items_${user.id}`)
      message.channel.send("coming soon")
    }
}