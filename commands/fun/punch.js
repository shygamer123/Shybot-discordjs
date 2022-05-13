const Color = "RANDOM";
const Discord = require("discord.js");
const API = require('anime-images-api')
const images_api = new API() 

module.exports = {
  name: "punch",
    cooldown:5,
  async execute( message, args)  {  
  let user  = message.mentions.users.first() || message.author
  images_api.sfw.punch().then(response => {

    const gif= new Discord.MessageEmbed()
      .setAuthor(`${user.username} get punched by ${message.author.username} `)
    .setImage(response.image)
            message.channel.send(gif)
        
  })
  }
}