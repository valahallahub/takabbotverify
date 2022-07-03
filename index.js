const { Collection, Client, Discord, MessageEmbed, Message } = require('discord.js');
const client = new Client({

    ws: {
        properties: {
            $browser: "Discord iOS" // or "Discord Android", doesn't matter lol 
        }},
      disableMention: 'everyone'
      
});

client.on('ready', () => {
  console.log('bot ready')
  client.user.setActivity('Verify code by KCCH')
})
require('discord-buttons')(client);
const path = require('path')
const fs = require('fs')
const discordbuttons = require('discord-buttons')
const { MessageButton, MessageActionRow } = require("discord-buttons")
const keepAlive = require("./server");
const config = require('./config.json');
client.prefix = config.prefix;

client.on('clickButton', async (button) => {
    if (button.id == 'AddVerifiedRole') {
        button.reply.send(`Verify เสร็จแล้วคะ!`, true)
        const role = button.guild.roles.cache.get(config.roleid)
        const member = button.clicker.member
        await member.roles.add(role)
    }{}
})

client.on('message', async (message) => {
    if (message.content.startsWith('.verify')) {
        const embed = new MessageEmbed()
            .setTitle('Verify By KCCH')
            .setColor("GREEN")
            .setDescription('กดที่ปุ่มเพื่อยืนยันตัวตนของท่านนะคะ')

        const add = new MessageButton()
            .setStyle("green")
            .setLabel("Verify ID")
            .setID("AddVerifiedRole")

        const row = new MessageActionRow()
            .addComponent([add])

       
        message.channel.send({ component: row, embed: embed })
    }
})
keepAlive();
client.login(process.env.TOKEN);
























































