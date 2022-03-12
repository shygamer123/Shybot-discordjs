const Color = "RANDOM";
const Discord = require("discord.js");
const API = require('anime-images-api')
const images_api = new API() 

module.exports = {
  name: "slap",
  async execute( message, args)  {  
   const Member = message.mentions.members.first() 
  images_api.sfw.slap().then(response => {
            message.channel.send(response.image)
        
  })
  }
}