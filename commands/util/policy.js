const Discord = require("discord.js");


module.exports = {
  name: "policy",
    cooldown:5,
  execute( message, args){
    const embed = new Discord.MessageEmbed()
      .setTitle("SHY BOT PRIVACY POLICY")
      .setDescription("By using the bot you agree to our privacy policy")
      embed.addField(
        "**WHAT DATA DO WE STORE?**",
        `
    We do not collect any personal information relating your account like Passwords or any other Credentials. The data we collect includes the User IDs, Server IDs, Channel IDs and Some Role IDs. The bot never requests for any personal data of the users and any act that breaks the Tos of Discord is discouraged by us!`
      )
      embed.addField(
        "**WHY WE NEED THIS DATA?**",
        `
    The data is required for the proper functioning of the bot features like Warning System, Logging and Autoroles. Without this data, our bot will not be able to perform these activities and thus making the features inaccessible for users`
      )
      embed.addField(
        "**HOW DO WE USE THIS DATA?**",
        `
    The data is used for the proper functioning for theWarning System, Logging activities and Autorole features of our Bot. User IDs are used to identify the users, Channel IDs are used to send the messages to the desginated channels and Server IDs to identify the Servers and the Role IDs are used for the Autorole feature`
      )
      embed.addField(
        `**HOW LONG DO WE STORE YOUR DATA?**`,
        `
    The data is stored as long as the bot is in your Server and as soon as the bot is kicked or removed from the Server, the data is deleted and is no longer to accessable to anyone`
      )
     embed.addField(
        "**WHO DO WE SHARE THE DATA WITH**?",
        `
    We never share your data with anyone except for [MongoDB Inc](https://mongodb.com) whom is a DataBase Company and all the data for our Bot is stored on the MongoDB Servers and According to MongoDB Inc. the data is only accessable by us.`
      )
     embed .addField(
        "**GOT CONCERNS OR QUERIES?**",
        `
    If you have any concerns or queries relating our privacy policy or our bot or if you want your data to be removed, You can contact [Cute Baby 🧡#3110](https://discord.com/users/846637504429817856) directy on our [Support Server](https://discord.gg/chYA3dQEWw)!`
      )
      .setFooter('meow🐈')
.setTimestamp()
     embed.setColor("GREEN");
    message.channel.send(embed);
  }
}