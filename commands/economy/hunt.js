const db= require('quick.db')

module.exports={
  name:'hunt',
  cooldown:10,
  async execute(message, args){
                let user  =  message.author




    let hunt = [
        "**🐰 `(Rabbit)`**",
        "**🐸 `(Frog)`**",
        "**🐒 `(Monkey)`**",
        "**🐔 `(Chicken)`**",
        "**🐤 `(Baby Chick)`**",
        "**🐺 `(Wolf)`**",
        "**🐓 `(Rooster)`**",
        "**🦃 `(Turkey)`**", 
        "**🐿 `(Chipmunk)`**",
        "**🐃 `(Water Buffalo)`**",
        "**🐂 `(Ox)`**",
        "**🐎 `(Race Horse)`**",
        "**🐖 `(Pig)`**",
        "**🐍 `(Snake)`**",
        "**🐄 `(Cow)`**"
    ]

    const huntresult = Math.floor((Math.random() * hunt.length));
    let amount = Math.floor(Math.random() * 2000) + 1;
        message.channel.send(`**HUNT MINIGAME:** - 🏹\n**${user.username}** has hunted a ${hunt[huntresult]} and earned \`${amount}\` credits.`)

    db.add(`money_${user.id}`, amount)
    db.push(`items_${user.id}`,hunt[huntresult])

    }
  
}
