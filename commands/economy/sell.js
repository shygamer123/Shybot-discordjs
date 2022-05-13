const { MessageEmbed } = require('discord.js');
const db = require('quick.db');
const client = require('../../index.js')
module.exports = {
    name: 'sell',
    cooldown:5,
    async execute( message, args){

const items =db.fetch(`items_${message.author.id}`)
let amount = Math.floor(Math.random() *1000) + 1;
      db.delete(`items_${message.author.id}`)
      message.channel.send(`Sold all the stuffs from your inventory and got some shin coins .`)
      
      db.add(`money_${message.author.id}`, amount)
    }
}