const { Client } = require('discord.js');
const client = new Client();
const config = require('./config.json');

client.once('ready', () => {
    console.log(`${client.user.tag} is now online!`)
})

client.on('message', (message) => {
    if (message.content.startsWith(`${config.prefix}ping`)) {
        message.channel.send(`pong`)
    }
})

client.login(config.token)