const { MessageEmbed } = require("discord.js");
const db = require('quick.db');
const client = require('../../index.js')

module.exports = {
    name: 'balance',
    aliases: ['bal'],
  cooldown:5,
    async execute(message, args){

        let user  = message.mentions.users.first() || message.author

        let bal = await db.fetch(`money_${user.id}`)
        let bankBalance = await db.fetch(`bank_${user.id}`)

        if(bal === null) bal = 0;
        if(bankBalance === null) bankBalance = 0;

        const balEmbed = new MessageEmbed()
        .setTitle(` ${user.username}\'s Balance`)
        .setColor("RANDOM")
      .addField('Wallet:- \n',bal)
      .addField('Bank:-',bankBalance)

        message.channel.send(balEmbed)
    }
}