const {
  SlashCommandBuilder,
  EmbedBuilder,
  ActionRowBuilder,
  StringSelectMenuBuilder,
} = require(`discord.js`);
const Discord = require(`discord.js`);
const fs = require(`fs`);

module.exports = {
  data: new SlashCommandBuilder()
    .setName("help")
    .setDescription("Panel de Ayuda."),

  async execute(interaction) {
    const { guild } = interaction
    const cmp = new ActionRowBuilder().addComponents(
      new StringSelectMenuBuilder().setCustomId("Menú").addOptions([
        {
          label: "Menú Principal",
          description: "Menú Principal.",
          value: "princi",
          emoji: "⚙️",
        },
        {
          label: "Utilidades",
          description: "Comandos de Utilidad.",
          value: "Opcion_1",
          emoji: "🔍",
        },
        {
          label: "Moderación",
          description: "Comandos de Moderación.",
          value: "moderación",
          emoji: "👮",
        },
        {
          label: "Diversión",
          description: "Comandos de Diversión.",
          value: "interacción",
          emoji: "🎉",
        },
        {
          label: "Confesiones",
          description: "Comandos de Confesiones.",
          value: "confesiones",
          emoji: "🤫",
        },

        {
          label: "Sugerencias",
          description: "Comandos de Sugerencias.",
          value: "sugerencias",
          emoji: "💡",
        },

        {
          label: "Acciones",
          description: "Comandos de Accion.",
          value: "acciones",
          emoji: "❤️",
        },
      ])
    );
    const user = interaction.user;

    const embed = new EmbedBuilder()
      .setTitle("Panel de Ayuda")
      .setColor("a39676")
      .setDescription(`Humilde es un Bot que tiene comandos de Utilidad, Diversion y Moderacion.\n\n**Web**: [humilde.ml](https://humilde.ml)\n**Invitarlo**: [Click aqui!](https://dsc.gg/humilde-bot)`);

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
      .setTitle("Comandos")
      .setDescription("</ping:1077986048300290048> Para ver la Latencia del Bot.\n</help:1077987121962430464> Para ver la Lista de Comandos.\n</serverinfo:1077987623030771750> Para ver la informacion del Servidor.\n</userinfo:1077987753377136711> Para ver la informacion del algun usuario.\n</crear-embed:1077987121962430464> Para ver la Lista de Comandos. \n</anuncio:1077987121962430464> Para hacer un anuncio para el servidor.")
      .setThumbnail(`${guild.iconURL({ dynamic: true })}`)
      .setFooter({ text: `Pedido por ${user.username}`, iconURL: `${user.displayAvatarURL({ dynamic: true })}` })
      .setTimestamp()
      .setColor("a39676");

    const embed2 = new EmbedBuilder()
    .setTitle("Comandos")
    .setDescription("</ban:1078536426678919248> Para banear a un usuario del Servidor.\n</kick:1078536697748406303> Para kickear a un usuario del Servidor.\n</timeout:1078537209528987719> Para darle un timeout a un usuario del Servidor.\n</clear:1078537545404665976> Para eliminar menajes de un canal.")
    .setThumbnail(`${guild.iconURL({ dynamic: true })}`)
    .setFooter({ text: `Pedido por ${user.username}`, iconURL: `${user.displayAvatarURL({ dynamic: true })}` })
    .setTimestamp()
    .setColor("a39676");

    const embed3 = new EmbedBuilder()
    .setTitle("Comandos")
    .setDescription("</8ball:1078537545404665976> Para jugar a 8Ball.\n</dados:1078540814797508678> Para lanzar dados. \n</meme:1083620543699353630> Para generar un meme aleatorio de Reddit.")
    .setThumbnail(`${guild.iconURL({ dynamic: true })}`)
    .setFooter({ text: `Pedido por ${user.username}`, iconURL: `${user.displayAvatarURL({ dynamic: true })}` })
    .setTimestamp()
    .setColor("a39676");

    const embed4 = new EmbedBuilder()
    .setTitle("Comandos")
    .setDescription("</setup-confesiones:1083619779304230982> Para definir el canal de las confesiones.\n</confesion:1083619779304230982> Para hacer una confesion.")
    .setThumbnail(`${guild.iconURL({ dynamic: true })}`)
    .setFooter({ text: `Pedido por ${user.username}`, iconURL: `${user.displayAvatarURL({ dynamic: true })}` })
    .setTimestamp()
    .setColor("a39676");

    const embed5 = new EmbedBuilder()
    .setTitle("Comandos")
    .setDescription("</setup-sugerencias:1083619779304230982> Para definir el canal de las confesiones.\n</sugerencias:1083619779304230982> Para hacer una confesion.")
    .setThumbnail(`${guild.iconURL({ dynamic: true })}`)
    .setFooter({ text: `Pedido por ${user.username}`, iconURL: `${user.displayAvatarURL({ dynamic: true })}` })
    .setTimestamp()
    .setColor("a39676");

    const embed6 = new EmbedBuilder()
    .setTitle("Comandos")
    .setDescription("</bite:1083619779304230982> Para morder a un usuario. \n</cry:1083619779304230982> Llorar. \n</cuddle:1083619779304230982> Para abrazar a un usuario. \n</happy:1083619779304230982> Feliz. \n</kiss:1083619779304230982> Para besar a un usuario. \n</slap:1083619779304230982> Para cachetear/bofetear a un usuario. \n")
    .setThumbnail(`${guild.iconURL({ dynamic: true })}`)
    .setFooter({ text: `Pedido por ${user.username}`, iconURL: `${user.displayAvatarURL({ dynamic: true })}` })
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

    collector.on("collect", async (i) => {
      if (i.values[0] === "confesiones") {
        await i.deferUpdate();
        i.editReply({ embeds: [embed4], components: [cmp] });
      }
    });

    collector.on("collect", async (i) => {
      if (i.values[0] === "sugerencias") {
        await i.deferUpdate();
        i.editReply({ embeds: [embed5], components: [cmp] });
      }
    });

    collector.on("collect", async (i) => {
      if (i.values[0] === "acciones") {
        await i.deferUpdate();
        i.editReply({ embeds: [embed6], components: [cmp] });
      }
    });


  },
};