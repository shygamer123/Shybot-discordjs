const Discord= require('discord.js')

module.exports={

name:'shop',
  cooldown:5,

  async execute(message, args){
    const shop= new Discord.MessageEmbed();
    
    shop.addField('The list of items are..','🍕Pizaa:-3000\n\n🍔Burger:-3500\n\n🍟Chips:-2000\n\n🌭Hotdog:-6000\n\n🌼Flower:-1000\n\n🎯target:-400\n\n🥇1stMedal:-10000\n\n🥈2ndMedal:-9000\n\n🥉3rdMedal:-8000\n\n🏆Trophy:-100000\n\n',true)
    message.channel.send(shop)

    
  }
}