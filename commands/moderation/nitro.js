
const Discord = require("discord.js");
const db = require("quick.db");
const client= require('../../index.js')
  
module.exports = {
  
  name: "nitro-emojis",
  aliases: ['nitro'],
  async execute( message, args){

   if(!message.member.hasPermission('ADMINISTRATOR')){ 
    return;
  }
    if(args[0]=='enable'){
      db.set(`nitroemojis_${message.guild.id}`,args[0])
      message.channel.send('enabled')
    }
    if(args[0]=='disable'){
db.set(`nitroemojis_${message.guild.id}`,args[0])
      message.channel.send('disabled')
    }
    if(args[0]==null){
      message.channel.send('write enable/disable')
    };
}}