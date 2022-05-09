require('dotenv').config(); //initialize dotenv
const Discord = require('discord.js'); //import discord.js

const client = new Discord.Client(); //create new client

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

//make sure this line is the last line
client.login(process.env.OTcyNTcwMjYzMTQzMTkwNTU4.Yna-pA.-7KXJlUKcrFARRlrYpn-4SFvH1Y); //login bot using token
