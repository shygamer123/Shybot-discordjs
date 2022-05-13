const slotItems = ["🍇", "🎰", "🍌", "🍉", "🍋", "💸", "🍒"];
const Discord= require('discord.js')
const db= require('quick.db')

module.exports={
name:'slots',
    cooldown:5,
  async execute(message, args){
   let user = message.author;
    let moneydb = await db.fetch(`money_${user.id}`)
    let money = parseInt(args[0]);
    let win = false;

    if (!money) return message.channel.send(`Wrong usage, specify an amount of credits.`);
    if (money > moneydb) return message.channel.send(`Wrong usage, you are betting more than you have.`);

    let number = []
    for (i = 0; i < 3; i++) { number[i] = Math.floor(Math.random() * slotItems.length); }

    if (number[0] == number[1] && number[1] == number[2]) { 
        money *= 9
        win = true;
    } else if (number[0] == number[1] || number[0] == number[2] || number[1] == number[2]) { 
        money *= 2
        win = true;
    }
    if (win) {
        let slotsEmbed1 = new Discord.MessageEmbed()
            .setDescription(`${slotItems[number[0]]} | ${slotItems[number[1]]} | ${slotItems[number[2]]}\n\nYou won \`${money}\` shin coins.`)
            slotsEmbed1.setColor("#363940")
        message.channel.send(slotsEmbed1)
      
          db.add(`slots_${message.author.id}`,1)

        db.add(`money_${user.id}`, money)
    } else {
        let slotsEmbed = new Discord.MessageEmbed()
            .setDescription(`${slotItems[number[0]]} | ${slotItems[number[1]]} | ${slotItems[number[2]]}\n\nYou lost \`${money}\` shin coins.`)
            .setColor("#363940")
        message.channel.send(slotsEmbed)
      
          db.add(`slots_${message.author.id}`,1)
        db.subtract(`money_${user.id}`, money)
    }
  }
}