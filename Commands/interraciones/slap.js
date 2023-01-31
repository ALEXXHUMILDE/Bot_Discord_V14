const anime = require('anime-actions');
const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName('slap')//////////// cambiar comando
    .setDescription('Bofetear/cachetear a un usuario.')
    .addUserOption( option =>
      option.setName('usuario')
                  .setDescription('Usuario')
                  .setRequired(true)
      ),

    async execute(interaction) {

      const member = interaction.options.getUser('usuario') || interaction.user

      const url = await anime.slap();////////// cambiar el anime.slap por el que quieras ej: anime.kiss , anime.highfive ect todo en la pagina de anime actions

      const embed = new EmbedBuilder()
        .setDescription(`¡**${interaction.user.username}** ha bofeteado/cacheteado a **${member.username}** sin rencor! 🙀`)///////// cambiar el texto por la accion que hace
       .setColor("a39676")
       .setImage(url)

      interaction.reply({ embeds: [embed] })

 }
}