const anime = require('anime-actions');
const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName('bite')//////////// cambiar comando
    .setDescription('Morder a un usuario.')
    .addUserOption( option =>
      option.setName('usuario')
                  .setDescription('Usuario')
                  .setRequired(true)
      ),

    async execute(interaction) {

      const member = interaction.options.getUser('usuario') || interaction.user

      const url = await anime.bite();////////// cambiar el anime.slap por el que quieras ej: anime.kiss , anime.highfive ect todo en la pagina de anime actions

      const embed = new EmbedBuilder()
        .setDescription(`¡**${interaction.user.username}** ha mordido a **${member.username}**! 😧`)///////// cambiar el texto por la accion que hace
       .setColor("a39676")
       .setImage(url)

      interaction.reply({ embeds: [embed] })

 }
}