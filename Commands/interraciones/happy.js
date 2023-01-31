const anime = require('anime-actions');
const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName('happy')//////////// cambiar comando
    .setDescription('Feliz.'),

    async execute(interaction) {

      const url = await anime.happy();////////// cambiar el anime.slap por el que quieras ej: anime.kiss , anime.highfive ect todo en la pagina de anime actions

      const embed = new EmbedBuilder()
        .setDescription(`¡**${interaction.user.username}** esta feliz! 😸`)///////// cambiar el texto por la accion que hace
       .setColor("a39676")
       .setImage(url)

      interaction.reply({ embeds: [embed] })

 }
}