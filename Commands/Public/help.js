const {
    SlashCommandBuilder,
    EmbedBuilder,
    ActionRowBuilder,
    StringSelectMenuBuilder,
    client,
    Client
  } = require(`discord.js`);
  const Discord = require(`discord.js`);
  const fs = require(`fs`);
  
  module.exports = {
    data: new SlashCommandBuilder()
      .setName("help")
      .setDescription("Mira mis comandos."),
  
    async execute(interaction) {
      const cmp = new ActionRowBuilder().addComponents(
        new StringSelectMenuBuilder().setCustomId("Menu").addOptions([
          {
            label: "Menu Principal",
            description: "Menu Principal.",
            value: "princi",
            emoji: "🏠",
          },
          {
            label: "Config",
            description: "Comandos de Utilidad.",
            value: "Opcion_1",
            emoji: "⚙️",
          },
          {
            label: "Moderacion",
            description: "Comandos de Moderacion.",
            value: "moderación",
            emoji: "⛔",
          },
          {
            label: "Interacciones",
            description: "Comandos de interaccion.",
            value: "interacción",
            emoji: "❤️",
          },
        ])
      );
      const user = interaction.user;
  
      const embed = new EmbedBuilder()
        .setTitle("Lista de ayuda")
        .setThumbnail(
          "https://cdn.discordapp.com/avatars/1043990016696795207/fd9f627b51dc29febdf9ed76be728612.webp?size=1024"
        )
        .setColor("a39676")
        .setDescription(`**Seleccione las opciones del menu de la seleccion de abajo.**`);
  
      let mensaje = await interaction.reply({
        embeds: [embed],
        components: [cmp],
      });
  
      const filtro = (i) => i.user.id === interaction.user.id;
      user.id;
  
      let collector = interaction.channel.createMessageComponentCollector({
        filter: filtro,
      });
  
      const embed1 = new EmbedBuilder()
        .setTitle("Comandos de configuracion")
        .setDescription("`Lista de comandos:` \n \n \n***Proximamente...***")
        .setThumbnail(
            "https://cdn.discordapp.com/avatars/1043990016696795207/fd9f627b51dc29febdf9ed76be728612.webp?size=1024"
          )
        .setFooter({ text: `Solicitado por ${interaction.user.username}` })
        .setTimestamp()
        .setColor("a39676");
  
      const embed2 = new EmbedBuilder()
        .setTitle("Comandos de Moderacion")
        .setThumbnail(
            "https://cdn.discordapp.com/avatars/1043990016696795207/fd9f627b51dc29febdf9ed76be728612.webp?size=1024"
          )
        .setDescription(
          "**/ban** \n\n**/clear** \n\n**/kick** \n\n**/timeout**"
        )
        .setFooter({ text: `Solicitado por ${interaction.user.username}` })
        .setTimestamp()
        .setColor("a39676");
  
      const embed3 = new EmbedBuilder()
        .setTitle("Comandos de interaccion (Acciones de Anime)")
        .setThumbnail(
            "https://cdn.discordapp.com/avatars/1043990016696795207/fd9f627b51dc29febdf9ed76be728612.webp?size=1024"
          )
        .setDescription("**/bite**\n\n**/cry**\n\n**/cuddle**\n\n**/dance**\n\n**/happy**\n\n**/kiss**\n\n**/slap**\n\n")
        .setFooter({ text: `Solicitado por ${interaction.user.username}` })
        .setTimestamp()
        .setColor("a39676");
  
      collector.on("collect", async (i) => {
        if (i.values[0] === "princi") {
          await i.deferUpdate();
          i.editReply({ embeds: [embed], components: [cmp] });
        }
      });
  
      collector.on("collect", async (i) => {
        if (i.values[0] === "Opcion_1") {
          await i.deferUpdate();
          i.editReply({ embeds: [embed1], components: [cmp] });
        }
      });
  
      collector.on("collect", async (i) => {
        if (i.values[0] === "moderación") {
          await i.deferUpdate();
          i.editReply({ embeds: [embed2], components: [cmp] });
        }
      });
  
      collector.on("collect", async (i) => {
        if (i.values[0] === "interacción") {
          await i.deferUpdate();
          i.editReply({ embeds: [embed3], components: [cmp] });
        }
      });
    },
  };