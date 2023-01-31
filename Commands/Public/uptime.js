const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
    .setName("uptime")
    .setDescription("Tiempo activo del Bot."),

    async execute(interaction, client) {
        const dias = Math.floor(client.uptime / 86400000)
        const horas = Math.floor(client.uptime / 3600000) % 24
        const minutos = Math.floor(client.uptime / 60000) % 60
        const segundos = Math.floor(client.uptime / 1000) % 60

        const embed = new EmbedBuilder()
        .setTitle(`__${client.user.username} Uptime__`)
        .setColor("a39676")
        .setTimestamp()
        .addFields(
            { name: "Uptime", value: `**El tiempo activo del Bot es de: \`${dias}\` dias,  \`${horas}\` horas, \`${minutos}\` minutos y \`${segundos}\` segundos.**`}
        )

        interaction.reply({ embeds: [embed] })

        }

    }

 