const { MessageEmbed } = require("discord.js");
const OWNER_ID = "840244590870003762";
const client = require('../../index.js')
module.exports = {
  name: "eval",
 async execute(message, args){
    if (message.author.id != OWNER_ID) {
      return message.channel.send("Limited to the bot owner only!");
    }
    try {
      const code = args.join(" ");
      if (!code) {
        return message.channel.send("What do you want to evaluate?");
      }
      let evaled = eval(code);

      if (typeof evaled !== "string") evaled = require("util").inspect(evaled);

      let embed = new MessageEmbed()
        .setAuthor("Eval", message.author.avatarURL())
        .addField("Input", `\`\`\`${code}\`\`\``)
        .addField("Output", `\`\`\`${evaled}\`\`\``)
        .setColor("GREEN");

      message.channel.send(embed);
    } catch (err) {
      message.channel.send(`\`ERROR\` \`\`\`xl\n${err}\n\`\`\``);
    }
  },
};