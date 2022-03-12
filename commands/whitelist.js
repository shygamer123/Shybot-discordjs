const Discord = require('discord.js')
const colors = ('RANDOM')
const client = require('../index.js')
const db = require('quick.db')

module.exports = {
    name: 'whitelist',
    aliases:['wl'],
    guildOnly: true,
    async execute(message, args) {
        if (message.author.id === '840244590870003762') {
            let User = await message.mentions.members.first() || message.guild.members.cache.get(args[0])
            
            let noUser = new Discord.MessageEmbed()
                .setAuthor(message.author.username, message.author.avatarURL({
                    dynamic: true
                }))
                .setColor(colors)
                .setDescription('Please provide a valid user')
                .addField("Usage:", '`whitelist <user> `')
                .setFooter(message.client.user.username, message.client.user.avatarURL())

            if (!User) return message.channel.send(noUser)

            let checkingBlacklisted = db.fetch(`blacklisted_${User.id}`)

            if(!checkingBlacklisted === true){
                let alreadyBlacklisted = new Discord.MessageEmbed()
                .setDescription('This user isn\'t blacklisted!')
                .setAuthor(message.author.username, message.author.avatarURL({
                    dynamic: true
                }))
                .setColor(colors)
                .setFooter(message.client.user.username, message.client.user.avatarURL())

            return message.channel.send(alreadyBlacklisted)
            }

            db.delete(`blacklisted_${User.id}`)
            let blacklistedEmbed = new Discord.MessageEmbed()
                .setDescription('I have whitelisted **' + User + '**')
                .setAuthor(message.author.username, message.author.avatarURL({
                    dynamic: true
                }))
                .setColor(colors)
                .setFooter(message.client.user.username, message.client.user.avatarURL())
            message.channel.send(blacklistedEmbed)
            
            
        } else {
            let cannotUse = new Discord.MessageEmbed()
                .setDescription('You cannot use this command. Only **OWNERS** can use this.')
                .setAuthor(message.author.username, message.author.avatarURL({
                    dynamic: true
                }))
                .setColor(colors)
                .setFooter(message.client.user.username, message.client.user.avatarURL())
            message.channel.send(cannotUse)
        }
    }
}