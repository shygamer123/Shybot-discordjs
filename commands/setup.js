const { MessageEmbed } = require("discord.js");

module.exports = {
  name:'setup',
    aliases:['setu'],
  execute(message, args){
    const setup = new MessageEmbed()
    setup.setAuthor(`${message.author.tag}`, message.author.avatarURL())
    setup.addField('Here:-',`1.Keep my Bot's role on top so that it can change nicknames.\n 2.Invite Via official link, otherwise it won't work.\n 3.Check bots permission which is recommended to be Administrator.`)

    setup.setFooter('meow🐈')
    setup.setTimestamp()

    message.channel.send(setup)
  }
}