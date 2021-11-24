const colors = require('colors');

module.exports = (client) => {
    console.log(colors.blue(`[${client.user.username.toUpperCase()}] BOT ONLINE!`))

    const activities = [
        'Calculando nota pra preguiçosos',
        'https://github.com/guilhermesantos0'
    ]

    let i = 0;
    setInterval(() => client.user.setActivity(`${activities[i++ % activities.length]}`, { type: 'PLAYING' }), 5000)
}