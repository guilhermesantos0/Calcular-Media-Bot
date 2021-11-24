const Discord = require('discord.js');
const config = require('./config.json');
const client = new Discord.Client({ intents: ["DIRECT_MESSAGES","GUILDS","GUILD_MEMBERS","GUILD_MESSAGES","GUILD_WEBHOOKS",""], partials: ["CHANNEL","GUILD_MEMBER","MESSAGE","REACTION","USER"] });

['commands', 'aliases'].forEach(f => client[f] = new Discord.Collection());
['comandos', 'eventos'].forEach(f => require(`./src/handlers/${f}`)(client));

client.login(config.token);