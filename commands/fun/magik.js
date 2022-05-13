const Discord = require('discord.js')
const client = require('../../index.js')
const db = require('quick.db')
const AME_API =('0b0fc58571d646747568c8547e5d6db82d9485ae9968fd5561eb06612ff21b97a03ed23c63b14b74bb1f5b3e8f03d13f4f6cecad53488c71a06dd5e0e9691320');
const AmeClient = require('amethyste-api');
const AmeAPI = new AmeClient(AME_API);

module.exports = {
    name: 'magik',
    description: 'Add a dash of magik to the user\'s avatar',
    usage: 'magik [username | nickname | mention | ID]',
    category: 'Fun',
    guildOnly: true,
    async execute(message, args) {

        let member = await message.mentions.users.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(r => r.user.username.toLowerCase().includes(args.join(' ').toLocaleLowerCase())) || message.guild.members.cache.find(r => r.displayName.toLowerCase().includes() === args.join(' ').toLocaleLowerCase()) ||
            message.author;
        let m = await message.channel.send("**Please Wait...**");
        let buffer = await AmeAPI.generate("magik", {
            url: member.user.displayAvatarURL({
                format: "png",
                size: 2048
            })
        });
        let attachment = new Discord.MessageAttachment(buffer, "magik.png");
        m.delete({
            timeout: 5000
        });
        message.channel.send(attachment);
    }
}