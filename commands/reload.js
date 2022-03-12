const client = require('../index.js')

module.exports = {
    name: "reload",
    aliases: ["load"],

    async execute(message, args){
        
        if (message.author.id !== "840244590870003762") {
            return;
        }

        if(!args[0]) return message.reply(`:x: Provide the commands to reload !! \`sh!reload [Command]\``)

        let command = args[0].toLowerCase()

        try {
            delete require.cache[require.resolve(`../commands/${command}.js`)];
            client.commands.delete(command);

            const pull = require(`../commands/${command}.js`)
            client.commands.set(command, pull)

            return message.channel.send(`${emoji.Approved} Reloaded Command: **\`${command}\`**`)

        } catch (error) {
            return message.reply(`:x: Cannot reload **\`${command}\`**\`\`\`${error}\`\`\``)
        }

    }
}