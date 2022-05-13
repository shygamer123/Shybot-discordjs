const client= require('../../index.js')
const Discord= require('discord.js')
const db= require('quick.db')

module.exports={
  name:'profile',
  aliases:['pro','prfl'],
    cooldown:5,
async execute(message, args){
  
        let user  = message.mentions.users.first() || message.author
const Member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;
    const Gif = Member.user.displayAvatarURL({ format: "gif" }), Webp = Member.user.displayAvatarURL({ format: "webp" }), Png = Member.user.displayAvatarURL({ format: "png" }), Jpg = Member.user.displayAvatarURL({ format: "jpg" })
  
 let bal = await db.fetch(`money_${user.id}`)
  if(bal === null) bal = "0";
        let bankBalance = await db.fetch(`bank_${user.id}`)
  if(bankBalance === null) bankBalance='0';

  let slots = await db.fetch(`slots_${user.id}`)
  if(slots === null) slots='0';

  let commands= await db.fetch(`commands_${user.id}`)
  if(commands=== null)commands='0';

  let rep= await db.fetch(`rep_${user.id}`)
  if(rep===null)rep='0';

  let premium= await db.fetch(`prem_${user.id}`)
  if(premium===null)premium='No'
  if(premium=== "false")premium='No'
  if(premium=== "true")premium='Yes'



    const profile = new Discord.MessageEmbed()
    profile.setColor("random")
  profile.setTitle(`${user.username}'s profile`)
    profile.setThumbnail(Member.user.displayAvatarURL({ dynamic: true }))
  profile.addFields(
		{ name: 'Balance', value: bal, inline: true },
		{ name: 'Bank', value: bankBalance, inline: true },
    {name:'Reputation', value:rep, inline:true},
    {name:'Premium', value:premium, inline:true}
  )
profile.addFields(
  { name: 'Slots used', value: slots, inline: true },
    { name: 'Eco-cmds used', value: commands, inline: true }
)
  
   profile.setFooter(user.id)
profile.setTimestamp()
    message.channel.send(profile)
  }
}