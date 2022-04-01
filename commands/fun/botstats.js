const Discord = require('discord.js');
const { mem, cpu, os } = require('node-os-utils');
const { stripIndent } = require('common-tags');
const client= require('../../index.js')
const { re } = require('mathjs');

module.exports = {
    name: "botstats",
    aliases:['bs'],
    async execute(message, args) {

        const { totalMemMb, usedMemMb } = await mem.info();

        const systeminfo = stripIndent`
        OS        : ${await os.oos()}
        CPU       : ${cpu.model()}
        Cores     : ${cpu.count()}
        CPU Usage : ${await cpu.usage()} %
        RAM       : ${totalMemMb} MB
        RAM Usage : ${usedMemMb} MB 
        `;

        const embed = new Discord.MessageEmbed()
        .setTitle(`🤖 My System Information !!`)
        .setDescription(`\`\`\`yaml\n${systeminfo}\`\`\``)
        .setFooter('meow🐈')
.setTimestamp()

        message.channel.send(embed)
    }
}