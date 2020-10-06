const Discord = require('discord.js');
const bot = new Discord.Client();

const token = 'NzYxODUyNDU2NzkwNTIzOTA0.X3goZA.B9vWApNuM9K2JewM0QpeHAFWaro';

bot.on('ready', () =>{
    console.log('This bot is online!');
})

bot.on('messages', msg=>{
    if(msg.content === "pi"){
        msg.reply('3.14')
    }
})

bot.login(token);