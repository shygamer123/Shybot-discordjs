const db= require('quick.db')

module.exports={
  name:'fish',
  cooldown:10,
  async execute(message, args){

            let user  =  message.author

    let fish = [
    "🐠 `(Tropical Fish)`",
    "🐟 `(Fish)`",
    "🐡 `(Blow Fish)`",
    "🐬 `(Dolphin)`",
    "🦐 `(Shrimp)`",
    "🦈 `(Shark)`",
    "🔋 `(Battery)`",
    "🦂 `(Scorpion)`",
    "⛸ `(Ice Skate)`",
    "👕 `(Shirt)`",
    "📦 `(Package)`",
    "🏓 `(Ping Pong)`",
    "🦑 `(Squid)`",
    "⚽ `(Soccer)`"

    ]
    let fishresult = Math.floor((Math.random() * fish.length));
    let amount = Math.floor(Math.random() * 1000) + 1;
    if (!args[0]) {
        message.channel.send(`**FISH MINIGAME:** - 🎣\n**${user.username}** fished a **${fish[fishresult]}**  and earned \`${amount}\` credits.`)
  }
     db.add(`money_${user.id}`, amount)
     db.push(`items_${user.id}`,fish[fishresult])
  }
}
