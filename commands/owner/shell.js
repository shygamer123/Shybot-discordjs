const { MessageEmbed } = require('discord.js')

const child = require ('child_process')
const client = require('../../index.js')

module.exports = {
    name: 'shell',
    
    async execute(message, args){
      if(message.author.id == '840244590870003762') 
      {
      
      const command = args.join(" ");
      if(!command) return message.reply('pls specific a module to install');
      
      child.exec(command, (err, res) => {
        if(err) return console.log(err);
        
        
        message.channel.send(res.slice(0, 2000), { code: 'js'});
      })
      }
    }
}