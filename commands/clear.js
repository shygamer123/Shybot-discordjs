const discord =require("discord.js");
module.exports = {
	name: 'clear',
	description: 'Clear up to 99 messages.',
  aliases: ["c","cl","clean"],

	execute(message, args) {
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("You dont have enough perms to use this cmd!")
    
		const amount = parseInt(args[0]) ;
  

		if (isNaN(amount)) {
			return message.reply('that doesn\'t seem to be a valid number.');
		} else if (amount <= 1 || amount > 100) {
			return message.reply('you need to input a number between 1 and 100.');
		}

		message.channel.bulkDelete(amount, true)
		return message.reply(`Deleted ${amount} of messages.`)
    message.react('<a:pin:839104612421206066>').catch(err => {
			
			console.error(err);
      const error = discord.MessageEmbed();
			message.channel.send('there was an error trying to clear messages in this channel!');
		});
	},
};