const { MessageEmbed } = require('discord.js');
const db = require('quick.db');
const client = require('../../index.js')
module.exports = {
    name: 'inventory',
    description: "View Your Inventory",
    aliases: ['inven', 'int', 'inv'],
  cooldown:10,
    usage: "[prefix]inventory",
    async execute( message, args){

        let items = db.fetch(`items_${message.author.id}`)
        if(items === null) items = "Their is nothing in your inventory";

        const Embed = new MessageEmbed()
        .addField('Inventory', items)
        .setColor("RANDOM")
      .setTimestamp()
      .setFooter(`Requested by ${message.author.username}`)

        message.channel.send(Embed)
    }
}