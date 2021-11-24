const Discord = require('discord.js');

module.exports = {
    config: {
        name: "calcular",
        aliases: ['c','calc']
    },
    run: async(client, message, args) => {

        const embed = new Discord.MessageEmbed()
        .setTitle("Calcule sua média!")
        .setDescription("Escolha uma das opções!\n\n<a:seta:771703491525214229> Na primeira, você só vai colocar as suas notas e eu te dou a soma, você não vai precisar fazer conta!\n\n<a:seta:771703491525214229> Na segunda, você vai simular uma possível nota na anual pra ver se passaria com essa nota!\n\n<a:seta:771703491525214229> Na terceira, você vai simular uma possível nota na recuperação para ver se você passaria com essa nota! Caso você já tenha aprovado nesta matéria, eu te aviso!")
        .setColor('2F3136')

        const menu = new Discord.MessageSelectMenu()
        .setCustomId('opção')
        .setPlaceholder('Clica aqui')
        .addOptions([
            {
                label: "📟 Calcular Nota!",
                description: "Só dou a soma das suas notas e a situação!",
                value: 'calculateGrades'
            },
            {
                label: "⚒️ Simular nota na Anual!",
                description: "Faremos uma simulação da sua nota na Anual para ver se você passaria!",
                value: "calculateExpectedAnual"
            },
            {
                label: "🔄️ Simular nota na Recuperação!",
                description: "Faremos uma simulação da sua nota na Recuperação para ver se você passaria!",
                value: "calculateRec"
            }
        ])

        const row = new Discord.MessageActionRow()
        .setComponents(menu)

        const filter = m => m.author.id == message.author.id
        const time = 30000
        const max = 1

        message.channel.send({ embeds: [embed], components: [row] }).then(msg => {
            msg.createMessageComponentCollector({ compnentType: "", time: 30000, max: 1 })
            .on('collect', c => {
                c.deferUpdate()
                
                if(c.values[0] == "calculateGrades"){
                    const embed = new Discord.MessageEmbed()
                    .setDescription("> Primeiro Trimestre:\n\nSua nota no primeiro trimestre!\n***Exemplo***: *10*, *8.5*, *3.6*")
                    .setColor('2F3136')
    
                    msg.edit({ embeds: [embed], components: [] }).then(msg => {
                        msg.channel.createMessageCollector({ filter, time, max })
                        .on('collect', c => {
                            let firstTri = c.content
                            c.delete()

                            const embed = new Discord.MessageEmbed()
                            .setDescription("> Segundo Trimestre:\n\nSua nota no segundo trimestre!\n***Exemplo***: *10*, *8.5*, *3.6*")
                            .setColor('2F3136')

                            msg.edit({ embeds: [embed], components: [] }).then(msg => {
                                msg.channel.createMessageCollector({ filter, time, max })
                                .on('collect', c => {
                                    let secondTri = c.content
                                    c.delete()

                                    const embed = new Discord.MessageEmbed()
                                    .setDescription("> Terceiro Trimestre:\n\nSua nota no terceiro trimestre!\n***Exemplo***: *10*, *8.5*, *3.6*")
                                    .setColor('2F3136')

                                    msg.edit({ embeds: [embed], components: [] }).then(msg => {
                                        msg.channel.createMessageCollector({ filter, time, max })
                                        .on('collect', c => {
                                            let thirdTri = c.content
                                            c.delete()

                                            const embed = new Discord.MessageEmbed()
                                            .setDescription("> Prova Semestral:\n\nSua nota na prova semestral!\n***Exemplo***: *10*, *8.5*, *3.6*")
                                            .setColor('2F3136')

                                            msg.edit({ embeds: [embed] }).then(msg => {
                                                msg.channel.createMessageCollector({ filter, time, max })
                                                .on('collect', c => {
                                                    let firstSem = c.content
                                                    c.delete()

                                                    let firstTriFinal = Number(firstTri) * 2
                                                    let secondTriFinal = Number(secondTri) * 3
                                                    let thirdTriFinal = Number(thirdTri) * 3

                                                    let actualCount = firstTriFinal + secondTriFinal + thirdTriFinal + Number(firstSem)

                                                    let status = actualCount > 60 ? "<a:check2:771703412022312970>" : "<a:x_:771703526376079360>"

                                                    const embed = new Discord.MessageEmbed()
                                                    .setTitle("Sua soma nesta matéria!")
                                                    .setDescription(`**Soma atual:** ${actualCount}\n**Status:** ${status}`)
                                                    .setColor('2F3136')

                                                    msg.edit({ embeds: [embed], components: [] })
                                                })
                                            })
                                        })
                                    })
                                })
                            })
                        })
                    })
                } else if(c.values[0] == "calculateExpectedAnual" ){
                    const embed = new Discord.MessageEmbed()
                    .setDescription("> Primeiro Trimestre:\n\nSua nota no primeiro trimestre!\n***Exemplo***: *10*, *8.5*, *3.6*")
                    .setColor('2F3136')
    
                    msg.edit({ embeds: [embed], components: [] }).then(msg => {
                        msg.channel.createMessageCollector({ filter, time, max })
                        .on('collect', c => {
                            let firstTri = c.content
                            c.delete()

                            const embed = new Discord.MessageEmbed()
                            .setDescription("> Segundo Trimestre:\n\nSua nota no segundo trimestre!\n***Exemplo***: *10*, *8.5*, *3.6*")
                            .setColor('2F3136')

                            msg.edit({ embeds: [embed], components: [] }).then(msg => {
                                msg.channel.createMessageCollector({ filter, time, max })
                                .on('collect', c => {
                                    let secondTri = c.content
                                    c.delete()

                                    const embed = new Discord.MessageEmbed()
                                    .setDescription("> Terceiro Trimestre:\n\nSua nota no terceiro trimestre!\n***Exemplo***: *10*, *8.5*, *3.6*")
                                    .setColor('2F3136')

                                    msg.edit({ embeds: [embed], components: [] }).then(msg => {
                                        msg.channel.createMessageCollector({ filter, time, max })
                                        .on('collect', c => {
                                            let thirdTri = c.content
                                            c.delete()

                                            const embed = new Discord.MessageEmbed()
                                            .setDescription("> Prova Semestral:\n\nSua nota na prova semestral!\n***Exemplo***: *10*, *8.5*, *3.6*")
                                            .setColor('2F3136')

                                            msg.edit({ embeds: [embed], components: [] }).then(msg => {
                                                msg.channel.createMessageCollector({ filter, time, max })
                                                .on('collect', c => {
                                                    let firstSem = c.content
                                                    c.delete()

                                                    const embed = new Discord.MessageEmbed()
                                                    .setDescription("> Prova Anual:\n\nSimulação de nota na anual!\n***Exemplo***: *10*, *8.5*, *3.6*")
                                                    .setColor('2F3136')

                                                    msg.edit({ embeds: [embed], components: [] }).then(msg => {
                                                        msg.channel.createMessageCollector({ filter, time, max })
                                                        .on('collect', c => {
                                                            let secondSem = c.content
                                                            c.delete()
        
                                                            let firstTriFinal = Number(firstTri) * 2
                                                            let secondTriFinal = Number(secondTri) * 3
                                                            let thirdTriFinal = Number(thirdTri) * 3
        
                                                            let actualCount = firstTriFinal + secondTriFinal + thirdTriFinal + Number(firstSem)
                                                            let simulatedCont = Number(secondSem) > Number(firstSem) ? firstTriFinal + secondTriFinal + thirdTriFinal + Number(secondSem) + Number(secondSem) : firstTriFinal + secondTriFinal + thirdTriFinal + Number(firstSem) + Number(secondSem)

                                                            let status = simulatedCont > 60 ? "<a:check2:771703412022312970>" : "<a:x_:771703526376079360>"

                                                            const embed = new Discord.MessageEmbed()
                                                            .setTitle("Simulação concluida!")
                                                            .setDescription(`**Soma Atual:** ${actualCount}\n**Soma Simulada:** ${simulatedCont}\n**Status Simulado:** ${status}`)
                                                            .setColor('2F3136')

                                                            msg.edit({ embeds: [embed], components: [] })
                                                        })
                                                    })
                                                })
                                            })
                                        })
                                    })
                                })
                            })
                        })
                    })   
                } else if(c.values[0] == "calculateRec"){
                    const embed = new Discord.MessageEmbed()
                    .setDescription("> Primeiro Trimestre:\n\nSua nota no primeiro trimestre!\n***Exemplo***: *10*, *8.5*, *3.6*")
                    .setColor('2F3136')
    
                    msg.edit({ embeds: [embed], components: [] }).then(msg => {
                        msg.channel.createMessageCollector({ filter, time, max })
                        .on('collect', c => {
                            let firstTri = c.content
                            c.delete()

                            const embed = new Discord.MessageEmbed()
                            .setDescription("> Segundo Trimestre:\n\nSua nota no segundo trimestre!\n***Exemplo***: *10*, *8.5*, *3.6*")
                            .setColor('2F3136')

                            msg.edit({ embeds: [embed], components: [] }).then(msg => {
                                msg.channel.createMessageCollector({ filter, time, max })
                                .on('collect', c => {
                                    let secondTri = c.content
                                    c.delete()

                                    const embed = new Discord.MessageEmbed()
                                    .setDescription("> Terceiro Trimestre:\n\nSua nota no terceiro trimestre!\n***Exemplo***: *10*, *8.5*, *3.6*")
                                    .setColor('2F3136')

                                    msg.edit({ embeds: [embed], components: [] }).then(msg => {
                                        msg.channel.createMessageCollector({ filter, time, max })
                                        .on('collect', c => {
                                            let thirdTri = c.content
                                            c.delete()

                                            const embed = new Discord.MessageEmbed()
                                            .setDescription("> Prova Semestral:\n\nSua nota na prova semestral!\n***Exemplo***: *10*, *8.5*, *3.6*")
                                            .setColor('2F3136')

                                            msg.edit({ embeds: [embed], components: [] }).then(msg => {
                                                msg.channel.createMessageCollector({ filter, time, max })
                                                .on('collect', c => {
                                                    let firstSem = c.content
                                                    c.delete()

                                                    const embed = new Discord.MessageEmbed()
                                                    .setDescription("> Prova Anual:\n\nSua nota na prova anual!\n***Exemplo***: *10*, *8.5*, *3.6*")
                                                    .setColor('2F3136')

                                                    msg.edit({ embeds: [embed], components: [] }).then(msg => {
                                                        msg.channel.createMessageCollector({ filter, time, max })
                                                        .on('collect', c => {
                                                            let secondSem = c.content
                                                            c.delete()

                                                            let firstTriFinal = Number(firstTri) * 2
                                                            let secondTriFinal = Number(secondTri) * 3
                                                            let thirdTriFinal = Number(thirdTri) * 3
        
                                                            let actualCount = Number(secondSem) > Number(firstSem) ? firstTriFinal + secondTriFinal + thirdTriFinal + Number(secondSem) + Number(secondSem) : firstTriFinal + secondTriFinal + thirdTriFinal + Number(secondSem) + Number(secondSem)

                                                            if( actualCount < 60 || Number(thirdTri) < 6 ){
                                                                const embed = new Discord.MessageEmbed()
                                                                .setDescription("> Prova de recuperação:\n\nSua nota na prova de recuperação!\n***Exemplo***: *10*, *8.5*, *3.6*")
                                                                .setColor('2F3136')

                                                                msg.edit({ embeds: [embed], components: [] }).then(msg => {
                                                                    msg.channel.createMessageCollector({ filter, time, max })
                                                                    .on('collect', c => {
                                                                        let simulatedRec = c.content
                                                                        c.delete()

                                                                        if(Number(simulatedRec) > Number(thirdTri)){
                                                                            let newThirdTri = (Number(simulatedRec) + Number(thirdTri))/2

                                                                            console.log(newThirdTri)

                                                                            let simulatedCont = Number(secondSem) > Number(firstSem) ? firstTriFinal + secondTriFinal + newThirdTri + Number(secondSem) + Number(secondSem) : firstTriFinal + secondTriFinal + newThirdTri + Number(secondSem) + Number(secondSem)
                                                                        
                                                                            let simulatedStatus = simulatedCont > 60 ? "<a:check2:771703412022312970>" : "<a:x_:771703526376079360>"

                                                                            const embed = new Discord.MessageEmbed()
                                                                            .setTitle("Simulação concluida!")
                                                                            .setDescription(`**Soma Atual:** ${actualCount}\n**Soma Simulada:** ${simulatedCont}\n**Status Simulado:** ${simulatedStatus}`)
                                                                            .setColor('2F3136')

                                                                            msg.edit({ embeds: [embed], components: [] })

                                                                        }

                                                                        const embed = new Discord.MessageEmbed()
                                                                        .setTitle("Simulação concluida!")
                                                                        .setDescription(`**Soma Atual:** ${actualCount}\n**Soma Simulada:** ${actualCount}\n**Status Simulado:** <a:x_:771703526376079360>`)
                                                                        .setColor('2F3136')

                                                                        msg.edit({ embeds: [embed], components: [] })
                                                                    })
                                                                })
                                                            } else {
                                                                const embed = new Discord.MessageEmbed()
                                                                .setTitle("Simulação concluida!")
                                                                .setDescription(`**Soma Atual:** ${actualCount}\n**Status:** <a:check2:771703412022312970>\n\nNão será necessária a recuperação!`)
                                                                .setColor('2F3136')

                                                                msg.edit({ embeds: [embed], components: [] })
                                                            }                        
                                                        })
                                                    })
                                                })
                                            })
                                        })
                                    })
                                })
                            })
                        })
                    })   
                }
            })
        })
    }
}