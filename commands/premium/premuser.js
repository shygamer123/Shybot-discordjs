const db= require('quick.db')
module.exports={
  name:'premiumset',
  aliases:'pset',
  async execute(message, args){
    if (message.author.id != '840244590870003762') {
      return;
    }else{
    let user= message.mentions.users.first();
        if(!args[0]){
          message.channel.send('Wrong Syntax, `shin pset @user true/false`')
        }
      db.set(`prem_${user.id}`,args[1])
      return message.channel.send('Done!')
    }
  }
}