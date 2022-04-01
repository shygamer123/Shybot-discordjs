const Discord=require('discord.js')
module.exports={
  name:"help",

  execute(message, args){
    const help = new Discord.MessageEmbed()
    help.setAuthor(`${message.author.tag}`, message.author.avatarURL())
    help.addField('Commands:-','Note use `sh!` before commands.\nIf you want to invite me use `sh!inviteme` command. \nIf you wanna know how to setup `sh!setup` \n Website on https://shybot.ml')

    help.addField('Moderation:-','`mute` `unmute` `lock` `unlock` `clearchat`')

    help.addField('Fun:-','`avatar` `afk` `covid` `hack` `say` `triggered` `reminder` `achievement` `join` `slap` `rip` `ping`')

    
    help.addField('More:-','`help` `aboutbot` `supportus` `join` `botstats` `policy` `servericon` `serverinfo` `support` `inviteme`')

    help.addField('Global:-','`global` `globaldel`')

    help.addField('Economy:-','`balance` `daily` `deposite` `fish` `hunt` `inventory` `slots`')

    help.addField('Music:-','`play` `clear` `back` `filter` `loop` `nowplaying` `pause` `progress` `queue` `resume` `save` `search` `seek` `shuffle` `skip` `stop` `volume`')

    help.addField('BotOwner:-','`leaveserver` `stop` `blacklist` `whitelist` `addmoney` `setmoney`')
    help.setFooter('New commands <3')
    help.setTimestamp()
    help.setColor('RANDOM')
    message.channel.send(help)
  }
}