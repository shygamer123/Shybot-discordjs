  const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello Express app!')
});

app.listen(3000, () => {
  console.log('server started');
});

//-----------------------------//

//-----------------------------//

//-----------------------------//

const Discord = require('discord.js');

const moment = require("moment");


const mongoose = require("mongoose");
const mongo_url=(process.env.mongo)
const jimp = require('jimp');
const client = new Discord.Client({
  disableMentions:'everyone',
  presence: {
    status: "dnd",
    activity: {
      name: "with cat (Meow~)",
      type: "STREAMING",
      url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    }
  }
});
const escapeRegex = (str) => str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");


client.on("ready", async ()=>{
  console.log(`${client.user.tag} is now Online!`)
  await mongoose.connect('mongodb+srv://vadish:pratham22345@lyricalbot.fdjz5.mongodb.net/myFirstDatabase?retryWrites=true&w=majority' , {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
  console.log('Connected to db')
})

const db= require('quick.db')

const ms = require("parse-ms");

process.on("unhandledRejection", console.error);


const { Collection } = require("discord.js");
const newUsers = new Discord.Collection();

const prefix = (process.env.prefix)

const fs = require("fs");

client.commands = new Collection();
client.aliases = new Collection();
const cooldowns = new Collection();
client.categories = fs.readdirSync("./commands/");
["command"].forEach(handler => {
    require(`./handlers/${handler}`)(client);
}); 

client.on("message", async (message) => {
      if (message.author.bot) return;
      if (!message.guild) return;

      const prefixRegex = new RegExp(`^(<@!?${client.user.id}>|${escapeRegex(process.env.prefix)})\\s*`);
      if (!prefixRegex.test(message.content)) return;

      const [, matchedPrefix] = message.content.match(prefixRegex);

      const args = message.content.slice(matchedPrefix.length).trim().split(/ +/);
      const commandName = args.shift().toLowerCase();

      const command =
        client.commands.get(commandName) ||
        client.commands.find((cmd) => cmd.aliases && cmd.aliases.includes(commandName));
  if (!command) return;

  if (!cooldowns.has(command.name)) {
    cooldowns.set(command.name, new Collection());
  }

  const now = Date.now();
  const timestamps = cooldowns.get(command.name);
  const cooldownAmount = (command.cooldown || 1) * 1000;

  if (timestamps.has(message.author.id)) {
    const expirationTime = timestamps.get(message.author.id) + cooldownAmount;

    if (now < expirationTime) {
      const timeLeft = (expirationTime - now) / 1000;
      return message.reply('You are on cooldown of, '+`${timeLeft}`)
      ;
    }
  }

  timestamps.set(message.author.id, now);
  setTimeout(() => timestamps.delete(message.author.id), cooldownAmount);
   let checkingBlacklistedMembers = db.fetch(`blacklisted_${message.author.id}`)
    if (checkingBlacklistedMembers === null) {
        checkingBlacklistedMembers === false
    }


    let blacklistedEmbed = new Discord.MessageEmbed()
        .setTitle("YOU HAVE BEEN BLACKLISTED")
        .setColor('RANDOM')
        .setDescription("You have been blacklisted from my commands. If you wish to appeal, please DM <@"+ '840244590870003762' +"> for more info.")
        .setFooter(`${client.user.username}`, client.user.avatarURL())

    if (checkingBlacklistedMembers === true) return message.channel.send(blacklistedEmbed)

  
      if (!command) return;



      try {
        command.execute(message, args,client);
      } catch (error) {
        console.error(error);
        message.channel.send("Something problem with me.").catch(console.error);

        
      }
    });
client.on("message", async message => {
  let startemojis = require("./nitro/main.js")
  startemojis(client, message, db)
})
//-------//



client.on('guildCreate', guild =>{

    const channelId = '939368696969855086'; //put your channel ID here

    const channel = client.channels.cache.get(channelId); 
     
    if(!channel) return; //If the channel is invalid it returns
    const embed = new Discord.MessageEmbed()
        .setTitle('I Joined A Guild!')
        .setDescription(`**Guild Name:** ${guild.name} (${guild.id})\n**Members:** ${guild.memberCount}`)
        .setTimestamp()
        .setColor('RANDOM')
        .setFooter(`I'm in ${client.guilds.cache.size} Guilds Now!`);
    channel.send(embed);
});



client.on('guildDelete', guild =>{
    const channelId = '939784419357638656';//add your channel ID
    const channel = client.channels.cache.get(channelId); //This Gets That Channel
    
    if(!channel) return;  //If the channel is invalid it returns
    const embed = new Discord.MessageEmbed()
        .setTitle('I Left A Guild!')
        .setDescription(`**Guild Name:** ${guild.name} (${guild.id})\n**Members:** ${guild.memberCount}`)
        .setTimestamp()
        .setColor('RED')
        .setFooter(`I'm in ${client.guilds.cache.size} Guilds Now!`);
    channel.send(embed);
});


client.on("message", async message => { 
    const args = message.content
    .slice()
    .trim()
    .split(/ +/g);
  const command = args.shift().toLowerCase();
  if (command === "shinglobal") {
    const channel = message.mentions.channels.first();
    if (!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send(`You are missing the **MANAGE GUILD** permission!`)
    if (!channel)
      return message.channel.send(
        "Invalid Channel, Please mention a channel!!"
      );
    db.set(`g_${message.guild.id}`, `${channel.id}`);
    message.channel.send(`Global Chat Set to ${channel}!`);
  }
  if (command === "shinglobaldelete") {
    const channel = message.mentions.channels.first();
    if (!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send(`You are missing the **MANAGE GUILD** permission!`)
    if (!channel)
      return message.channel.send(
        "Invalid Channel, Please mention a channel!!"
      );
    db.delete(`g_${message.guild.id}`, `${channel.id}`);
    message.channel.send(`Global Chat removed!`);
  }
});

client.on("message", async message => {
  if (message.author.bot) return;
  if (message.content.startsWith("sh!")) return;
  let set = db.fetch(`g_${message.guild.id}`);
  if (message.channel.id === set) {
    const gembed = new Discord.MessageEmbed()
      gembed.setTitle("Username: " + message.author.tag)

      gembed.addField("Message:", message.content)
      gembed.addField("req:-",'Do not send Images.')
    client.guilds.cache.forEach(g => {
      try {
        client.channels.cache.get(db.fetch(`g_${g.id}`)).send(gembed);
      } catch (e) {
        return;
      }
    });
  }
});

client.on('guildMemberAdd', async member => {
let channel =db.fetch(`wel_${member.guild.id}`); 
  if (channel === null) {

    return;

  }
client.channels.cache.get(channel).send(` ●▬▬▬▬▬▬▬▬๑۩✰۩๑▬▬▬▬▬▬▬▬●
✰・${member.user} joined the ${member.guild.name} \n ●▬▬▬▬▬▬▬▬๑۩✰۩๑▬▬▬▬▬▬▬▬● \n ╰・⌬・${member.guild.name} has now ${member.guild.memberCount} members`)
    if (!channel) return;
})


client.login(process.env.token);