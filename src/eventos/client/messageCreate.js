const Discord = require('discord.js');
const config = require("../../../config.json");
const webhook = new Discord.WebhookClient({ id: "852901112079056896", token: "inQoG0NkXLJE1fVYaU_G_yL3XdsqkzYrA2OAV-d6UGvD02UR5cY9sP_AJNLHyc41Nq8a"})

module.exports = async(client, message) => {
    if(message.author.bot || message.webhookId) return
    if(message.channel.type == "DM") {
        const embed = new Discord.MessageEmbed()
        .setDescription(`Mandano mensagem pra bot? Ta preciando conversar, aconteceu alguma coisa?`)
        .setColor('FF0000')
        
        const embed1 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle(`${client.user.username}`)
        .setDescription(`${message.author.tag}\n\n`+"```yaml\n"+message.content+"```")

        if(message.attachments.size > 0){
            embed1.addField("> Arquivos:",`${message.attachments.map((a) => a.url)}`,false)
        }
    
        webhook.send({embeds: [embed1]})
        return message.author.send({embeds: [embed]})
    }

    let prefix = config.prefix
  //
    let messageArray = message.content.split(" ");
    let command = messageArray[0];
    let args = messageArray.slice(1);

    if(message.content.startsWith(prefix)){
        let arquivocmd = client.commands.get(command.slice(prefix.length).toLowerCase()) || client.commands.get(client.aliases.get(command.slice(prefix.length).toLowerCase()))
        if (arquivocmd) arquivocmd.run(client, message, args, false)
    }

    if (message.content == `<@!${client.user.id}>`){
    
        message.reply('Salve, só sirvo pra calcular nota de quem tem preguiça')
    }
}