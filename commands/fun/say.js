const Discord = require("discord.js");
const client= require('../../index.js')
module.exports={ 
name:'say',
  async execute( message , args) {
    const sayMessage = args.join(` `);
    message.delete().catch(O_o => { });
    message.channel.send(sayMessage+"\n-said by someone")
}
}
