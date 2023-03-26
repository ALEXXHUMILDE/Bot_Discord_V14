const {
    ChatInputCommandInteraction,
    SlashCommandBuilder,
    EmbedBuilder,
    ChannelType,
  } = require("discord.js");
  module.exports = {
    data: new SlashCommandBuilder()
      .setName("serverinfo")
      .setDescription("Te mostrare la informacion del Servidor."),
    /**
     *
     * @param {ChatInputCommandInteraction} interaction
     */
    async execute(interaction) {
      const { guild } = interaction;
      const {
        createdTimestamp,
        ownerId,
        description,
        members,
        memberCount,
        channels,
      } = guild;
  
  
  
      const botcount = members.cache.filter((member) => member.user.bot).size;
  
      const getChannelTypeSize = (type) =>
  
        channels.cache.filter((channel) => type.includes(channel.type)).size;
  
  
  
      const totalChannels = getChannelTypeSize([
  
        ChannelType.GuildText,
  
        ChannelType.GuildVoice,
  
        ChannelType.GuildStageVoice,
  
        ChannelType.GuildPublicThread,
  
        ChannelType.GuildPrivateThread,
  
        ChannelType.GuildForum,
  
        ChannelType.GuildNews,
  
        ChannelType.GuildCategory,
  
        ChannelType.GuildNewsThread,
  
      ]);
  
  
  
      const embed = new EmbedBuilder()
  
        .setColor("a39676").setImage(guild.bannerURL({ size: 1024 }))
  
        .setAuthor({
  
          name: guild.name,
  
          iconURL: guild.iconURL({ dynamic: true }),
  
        })
  
        .setThumbnail(guild.iconURL({ dynamic: true }))
  
        .addFields(
  
          {
  
            name: "Descripción:",
  
            value: [`${guild.description || "❌ ¡Este servidor no tiene una Descripcion!"}`].join("\n\n"),
  
          },
  
          {
  
            name: "Información General",
  
            value: [
  
              `Nombre: ${guild.name}`,
  
              `🆔 ID: ${guild.id}`,
  
              `🗓️ Creado: <t:${parseInt(createdTimestamp / 1000)}:R>`,
  
              `👑 Dueño: <@${ownerId}>`,
  
              `🔗 URL: ${guild.vanityURLCode || "No tiene."}`,
  
            ].join("\n"),
  
          },
  
          {
  
            name: "👥 Miembros",
  
            value: [
  
              `👤 Usuarios: ${guild.memberCount - botcount}`,
  
              `🤖 Bots: ${botcount}`,
  
            ].join("\n"),
  
            inline: true,
  
          },
  
          {
  
            name: "📈 Mejoras del servidor",
  
            value: [
  
              `🆙 Nivel: ${guild.premiumTier}`,
  
              `✨ Mejoras: ${guild.premiumSubscriptionCount}`,
  
            ].join("\n"),
  
            inline: true,
  
          },
  
          {
  
            name: `💬 Canales (${totalChannels})`,
  
            value: [
  
              `# Texto: ${getChannelTypeSize([ChannelType.GuildText,
  
                ChannelType.GuildForum,
  
                ChannelType.GuildNews,
  
              ])}`,
  
              `🔊 Voz: ${getChannelTypeSize([
  
                ChannelType.GuildStageVoice,
  
                ChannelType.GuildVoice,
  
              ])}`,
  
              `🧵 Hilos: ${getChannelTypeSize([
  
                ChannelType.GuildPublicThread,
  
                ChannelType.GuildPrivateThread,
  
                ChannelType.GuildNewsThread,
              ])}`,
              `📘 Categorias: ${getChannelTypeSize([ChannelType.GuildCategory])}`,
            ].join("\n"),
            inline: true,
          },
          {
            name: "🖼️ Banner del Servidor",
            value: guild.bannerURL()
              ? "** **"
              : "❌ ¡Este servidor no tiene un Banner!",
          }
        );
      await interaction.reply({ embeds: [embed] });
    },
  };