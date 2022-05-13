const Discord=require('discord.js')
module.exports={
  name:"help",
  cooldown:5,
  execute(message, args){
    const help = new Discord.MessageEmbed()

    help.setColor('RANDOM')
    
    help.setTitle('Help command \n **use prefix infront of the commands, excluding global.**')
    
    help.addField('Economy:-','`balance` `daily` `deposite` `fish`\n `hunt` `inventory` `sell` `shop` `slots` `compare`')

    help.addField('Fun:-','`aboutbot` `achievement` `afk` \n`avatar` `covid` `hack` `join` \n`memberscount` `reminder` `say` `slap` \n `triggered` `cuddle` `hug` \n `kiss` `magik` `meme` `pat` `punch` ')

    help.addField('Moderation:-','`addrole` `clearchat` `lock` `mute`\n `nitro` `servericon` `serverinfo` `setup`\n `unlock` `unmute` `kick`')

    help.addField('Utils:-','`botstats` `feedback` `help` `inviteme` \n`policy` `support` `uptime` `profile` `nsfw`')

    help.addField('Global:-','`global` `globaldelete`\n **Do not keep space in prefix in this command.**')

    help.addField('Owner:-','`blacklist` `whitelist` `eval` `leaveserver`\n `reload` `servers` `shell` `stop` `premiumset` `set`')

	help.setTimestamp()
	help.setFooter('uwu');
    message.channel.send(help)
  }
}