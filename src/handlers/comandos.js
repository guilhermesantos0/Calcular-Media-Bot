const { readdirSync } = require('fs');
const { join } = require('path');
const colors = require('colors');

module.exports = (client) => {

  const load = dirs => {
    const commands = readdirSync(join(__dirname, `../comandos/${dirs}`)).filter(f => f.endsWith('.js'))

    if(commands){
        for (let file of commands) {
          const comando = require(`../comandos/${dirs}/${file}`)
          client.commands.set(comando.config.name, comando)
          console.log(colors.blue(`Comando ${comando.config.name} carregado com sucesso!`))
          if (comando.config.aliases) comando.config.aliases.forEach(a => client.aliases.set(a, comando.config.name))
        }
    }
  }
  
  readdirSync(join(__dirname, `../comandos/`)).forEach(x => load(x))

}