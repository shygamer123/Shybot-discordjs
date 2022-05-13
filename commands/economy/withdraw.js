const { MessageEmbed } = require('discord.js');
const db = require('quick.db');
const ms = require('parse-ms');
const client = require('../../index.js')

module.exports = {
    name: 'withdraw',
    description: "Deposit Money",
    usage: "[prefix]deposit <amount>",
    aliases: ['with'],
    cooldown:5,
    async execute( message, args){

      const member= message.author;
      db.add(`commands_${member.id}`,1)

        let all = db.fetch(`bank_${member.id}`)

        if(args[0] === "all") args[0] = all
        if(args[0] === "max") args[0] = all


        if (!args[0]) {
            const depositError = new MessageEmbed()
                .setTitle("You Need to Give a Valid Amount to withdraw")
                .setColor("RANDOM")
                .setFooter("You can do `shin with all` to withdraw all your cash at once")

            return message.channel.send(depositError)
        }

        if (isNaN(args[0])) {
            const depositError2 = new MessageEmbed()
                .setDescription("That is not a Valid amount!")
                .setColor("RANDOM")

            return message.channel.send(depositError2)
        }

        if (args[0] > all) {
            const depositError3 = new MessageEmbed()
                .setDescription("You Do Not Have That Much Cash!")
                .setColor("RANDOM")

            return message.channel.send(depositError3)
        }


        


        
        db.add(`money_${member.id}`, args[0])
        db.subtract(`bank_${member.id}`, args[0])
        let bankBal = db.fetch(`bank_${message.author.id}`)

        let depositSuccess = new MessageEmbed()
            .setDescription(`Successfully withdrawed ${args[0]} shin coins from you Bank Account! \n Your new bank balance is ${bankBal} shin coins`)
            .setColor("RANDOM")

        message.channel.send(depositSuccess)






    }
}