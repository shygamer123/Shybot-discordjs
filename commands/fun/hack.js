const Discord = require("discord.js");
const client= require('../../index.js')
const ms = require("ms")
module.exports = {
  name: "hack",
  async execute(message, args) {
    const hacked = message.mentions.users.first();
    const user = message.mentions.users.first();

            function wait(ms){
            let start = new Date().getTime();
            let end = start;
            while(end < start + ms) {
              end = new Date().getTime();
           }
         }

if(!user)
{
  return message.reply("Who to hack? Please Mention him");
}
const prompt = await message.channel.send(`Hacking ${user ? hacked.username : hacked} now...`);
    
   await wait(2700);
     await  prompt.edit('Finding discord login...');
     await wait(2700);
     await  prompt.edit(`Found:\n**Email**: \`${hacked.username}***@gmail.com\`\n**Password**: \`*******\``);
     await  wait(3700);
     await  prompt.edit('Fetching dms');
     await  wait(3700);
     await  prompt.edit('Found:-I love you.');
     await  wait(3700);
     await prompt.edit('Listing most common words...');
     await  wait(3700);
     await  prompt.edit('Found:-Meow');
     await  wait(2700);
     await  prompt.edit(`Injecting virus into discriminator #${hacked.discriminator}`);
    await  wait(3700);
     await  prompt.edit('Virus injected');
     await  wait(3700);
    
   await prompt.edit('Finding IP address');
    await wait(5000);
    await  prompt.edit('meow.9.1.2');
    await wait(5000);
   await  prompt.edit('Spamming email...');
   await wait(6700);
   await  prompt.edit('Selling data to facebook...');
  await   wait(3700);
   await  prompt.edit('Completed');
    

  }
}
