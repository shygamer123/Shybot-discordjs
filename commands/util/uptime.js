module.exports = {
  name: "uptime",
  aliases: ["u"],
    cooldown:5,
  execute(message) {
    let seconds = Math.floor(message.client.uptime / 1000);
    let minutes = Math.floor(seconds / 60);
    let hours = Math.floor(minutes / 60);
    let days = Math.floor(hours / 24);

    seconds %= 60;
    minutes %= 60;
    hours %= 24;

    return message
      .reply(`Bot is online from ${days} days, ${hours} hours,${minutes} minutes, ${seconds} seconds`)
      .catch(console.error);
  }
};