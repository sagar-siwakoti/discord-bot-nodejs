require("dotenv").config();

const { Client } = require("discord.js");
const client = new Client();

client.on("ready", () => {
  console.log(`${client.user.tag} has logged in`);
});
client.on('message',(message)=>{
    if (message.author.bot) return;


});
client.login(process.env["DISCORDJS-BOT-TOKEN"]);
