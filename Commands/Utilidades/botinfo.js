const {
    ChatInputCommandInteraction,
    SlashCommandBuilder,
    EmbedBuilder,
  } = require("discord.js");
  const { connection } = require("mongoose")
  
  module.exports = {
    data: new SlashCommandBuilder()
      .setName("botinfo")
      .setDescription("Te enseñare mi informacion."),
    /**
     *
     * @param {ChatInputCommandInteraction} interaction
     */
    async execute(interaction, client, message) {
      const user = interaction.user;
      let member = await user.fetch({ force: true });
  
      const embed = new EmbedBuilder()
        .setColor("a39676")
        .setAuthor({
          name: `${client.user.tag}`,
          iconURL: `${client.user.displayAvatarURL({ dynamic: true })}`,
        })
        .setThumbnail(client.user.displayAvatarURL({ dynamic: true }))
        .setTitle(`Información de ${client.user.username}`)
        .addFields(
            { name: "🤖 **Tag:**", value: `<@${client.user.id}>`, inline: true },
            { name: "📆 **Creado:**", value: `<t:${parseInt(client.user.createdTimestamp / 1000)}:R>`, inline: true },
            { name: "🔰 **ID:**", value: `${client.user.id}`, inline: true },
            { name: "👑 **Creador:**", value: `<@829868469326970900> (𝐀𝐋𝐄𝐗𝐗#0001)`, inline: true },
            { name: "⚙️ **Comandos:**", value: `${client.commands.size}`, inline: true },
            { name: "💾 **Servidores:**", value: `${client.guilds.cache.size}`, inline: true },
            { name: "🏓 **Ping:**", value: `${client.ws.ping}ms`, inline: true },
        )
        .setTimestamp()  
      interaction.reply({ embeds: [embed] });
    },
  };