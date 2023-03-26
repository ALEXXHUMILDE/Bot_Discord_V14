const anime = require("anime-actions");
const { SlashCommandBuilder, EmbedBuilder } = require("discord.js")

module.exports = {
    data: new SlashCommandBuilder()
    .setName("bite")
    .setDescription("Morder.")
    .addUserOption( option =>
        option.setName("usuario")
        .setDescription("Ususario que quieres morder.")
        .setRequired(true)
        ),

    async execute(interaction) {

        const miembro = interaction.options.getUser("usuario") || interaction.user

        const animeimagen = await anime.bite();

        const embed = new EmbedBuilder()
        .setDescription(`**${interaction.user.username}** a mordido a **${miembro.username}**.`)
        .setColor("Random")
        .setImage(animeimagen)

        interaction.reply({ embeds: [embed] })
    }
}