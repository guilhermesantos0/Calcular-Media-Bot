const { readdirSync } = require('fs');
const { join } = require('path');
const colors = require('colors');

module.exports = (client) => {
  console.log('\n')

  const load = dirs => {
    const events = readdirSync(join(__dirname, `../eventos/${dirs}`)).filter(f => f.endsWith('.js'))

    if(events){
        for (let file of events) {
          const event = require(`../eventos/${dirs}/${file}`)
          let eventName = file.split(".")[0]
          console.log(colors.blue(`Evento ${eventName.replace('.js', '')} carregado com sucesso!`))
    
          client.on(eventName, event.bind(null, client))
        }
    }
  }
  readdirSync(join(__dirname, `../eventos/`)).forEach(x => load(x))
  console.log('\n')

}