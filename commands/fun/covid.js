
const { MessageEmbed } = require('discord.js')
const covidapi = require('covidapi')

module.exports = {
  name: 'covid',
	async execute(message, args) {
		if (!args[0]) {
			message.react('👎')
			return message.channel.send(
				"Please tell me which country's covid information you would like!"
			)
		} else {
			const countrycovid = args.join(' ')
			const data = await covidapi.countries({ country: countrycovid })

			if (data.cases === undefined) {
				message.react('👎')
				return message.channel.send(
					`Unable to fetch covid-19 stats for **"${countrycovid}"**`
				)
			}

			const countryCovidEmbed = new MessageEmbed()
				.setColor('RANDOM')
				.setTitle(`Covid-19 stats for "${countrycovid}"`)
				.addField('Cases', data.cases, true)
				.addField('Active Cases', data.active, true)
				.addField('Deaths', data.deaths, true)
				.addField('Recovered', data.recovered, true)
        .setFooter('meow🐈')
        .setTimestamp()
			message.channel.send(countryCovidEmbed)
		}
	}
}
