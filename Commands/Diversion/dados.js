const Discord = require('discord.js');
const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
  .setName('dados')
  .setDescription('Lanzaré unos dados aleatoriamente.'),

  execute(interaction) {
   const { options } = interaction;
   let rpts = [`🎲 1`, `🎲 2`, `🎲 3`, `🎲 4`,`🎲 5`,`🎲 6`,`🎲 7`,`🎲 8`,`🎲 9`,`🎲 10`,`🎲 11`,`🎲 12`,`🎲 13`,`🎲 14`,`🎲 15`,`🎲 16`,`🎲 17`,`🎲 18`,`🎲 19`,`🎲 20`]

///   if (!pregunta) return int.reply('Escriba una pregunta.')
     const embed = new EmbedBuilder()
     .setColor(`Random`)
     .setTitle(`Dados 🎲`)
     .setImage(`https://www.gifsanimados.org/data/media/710/dado-imagen-animada-0104.gif`)
     .addFields(
        {name: `Salió`, value: `${rpts[Math.floor(Math.random() * rpts.length)]}`}
     )

     interaction.channel.send({ embeds: [embed] });
     interaction.reply({ content: `Tirando Dados 🎲...`,  ephemeral: false })

  },

};