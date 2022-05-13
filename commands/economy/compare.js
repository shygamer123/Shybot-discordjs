const client = require('../../index.js')
const db = require('quick.db')
const Discord=require('discord.js')

module.exports = {
  name: 'compare',
  cooldown: 10,
  async execute(message, args) {
    const user = message.mentions.users.first();    
     if(!user){
      return message.reply("Wrong mention/wrong syntax `shin compare @mention`")
    }
let moneyau =  db.fetch(`money_${user.id}`);
let moneyme =  db.fetch(`money_${message.author.id}`);

    if(moneyau===null)moneyau=0;
    if(moneyme===null)moneyme=0;

    
        let bankBalance = await db.fetch(`bank_${user.id}`)
  if(bankBalance === null) bankBalance='0';
        let bankBalancee = await db.fetch(`bank_${message.author.id}`)
  if(bankBalancee === null) bankBalancee='0';

  let slots = await db.fetch(`slots_${user.id}`)
  if(slots === null) slots='0';
      let slotss = await db.fetch(`slots_${message.author.id}`)
  if(slotss === null) slotss='0';

  let commands= await db.fetch(`commands_${user.id}`)
  if(commands=== null)commands='0';
  let commandss= await db.fetch(`commands_${message.author.id}`)
  if(commandss=== null)commandss='0';

  let rep= await db.fetch(`rep_${user.id}`)
  if(rep===null)rep='0';
      let repp= await db.fetch(`rep_${message.author.id}`)
  if(repp===null)repp='0';

  let premium= await db.fetch(`prem_${message.author.id}`)
  if(premium===null)premium='No'
  if(premium=== "false")premium='No'
  if(premium=== "true")premium='Yes'
    
  let premiumme= await db.fetch(`prem_${user.id}`)
  if(premiumme===null)premium='No'
  if(premiumme=== "false")premium='No'
  if(premiumme=== "true")premium='Yes'


    
    const compare = new Discord.MessageEmbed()
    compare.addField(`__Wallet__`,`You have **${moneyme}** shin coins in your wallet,\n Your opponent have **${moneyau}** shin coins in wallet.`, true)
    compare.addField(`__Bank__`,`You  have **${bankBalancee}** shin coins in your bank,\n Your opponent have **${bankBalance}** shin coins in wallet.`, true)
    compare.addField(`__Eco-Commands__`,`You have used **${commandss} times** eco-commands, \n Your friend has used **${commands} times** eco-commands.`)
    compare.setFooter(`Hehe`)
    compare.setColor('RANDOM');
    message.channel.send('Here is your comparison.',compare)

  }
}