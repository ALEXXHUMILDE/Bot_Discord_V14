
const {
    ChatInputCommandInteraction,
    SlashCommandBuilder,
    EmbedBuilder,
    PermissionFlagsBits,
    time,
  } = require("discord.js");
  
  module.exports = {
    data: new SlashCommandBuilder()
      .setName("crear-embed")
      .setDescription("Crea un embed personalizado.")
      .setDefaultMemberPermissions(PermissionFlagsBits.ManageMessages)
      .addChannelOption((option) =>
        option
          .setName(`canal`)
          .setDescription(`Canal al que será enviado el embed.`)
          .setRequired(true)
          .addChannelTypes(0)
      )
      .addStringOption((option) =>
        option.setName(`titulo`).setDescription(`Titulo del embed.`)
      )
      .addStringOption((option) =>
        option.setName(`descripcion`).setDescription(`Descripcion del embed.`)
      )
      .addAttachmentOption((option) =>
        option.setName(`thumbnail`).setDescription(`Miniatura del embed.`)
      )
      .addAttachmentOption((option) =>
        option.setName(`imagen`).setDescription(`Imagen del embed`)
      )
      .addStringOption((option) =>
        option.setName(`footer`).setDescription(`Footer del embed.`)
      )
      .addStringOption((option) =>
        option
          .setName(`color`)
          .setDescription(`Color del embed.`)
          .setChoices(
            { name: "Gris", value: "greyple" },
            { name: "Verde", value: "green" },
            { name: "Rojo", value: "red" },
            { name: "Amarillo", value: "yellow" },
            { name: "Aqua", value: "aqua" }
          )
      )
      .addStringOption((option) =>
        option
          .setName(`timestamp`)
          .setDescription(`¿Quieres agregar un timestamp al embed?`)
          .setChoices({ name: "Si", value: "si" }, { name: "No", value: "no" })
      )
      .addStringOption((option) =>
        option.setName(`autor`).setDescription(`Agrega un autor al embed.`)
      ),
    /**
     *
     * @param {ChatInputCommandInteraction} interaction
     */
    async execute(interaction) {
      let embed = new EmbedBuilder();
      let embed2 = new EmbedBuilder();
  
      let channel = interaction.options.getChannel(`canal`);
      let titulo = interaction.options.getString(`titulo`);
      let descripcion = interaction.options.getString(`descripcion`);
      let thumbnail = interaction.options.getAttachment(`thumbnail`);
      let imagen = interaction.options.getAttachment(`imagen`);
      let timestamp = interaction.options.getString(`timestamp`);
      let footer = interaction.options.getString(`footer`);
      let color = interaction.options.getString(`color`);
      let autor = interaction.options.getString(`autor`);
  
      if (titulo) {
        embed.setTitle(titulo);
      } else {
      }
  
      if (descripcion) {
        if (descripcion.length > 2048)
          return interaction.reply({
            embeds: [
              embed2.setDescription(
                `<a:_:1082895947106889820> | ¡La descripcion no puede ser de mas de 2048 caracteres!`
              ),
            ],
            ephemeral: true,
          });
        embed.setDescription(descripcion);
      } else {
      }
  
      if (thumbnail) {
        embed.setThumbnail(thumbnail.url);
      } else {
      }
  
      if (imagen) {
        embed.setImage(imagen.url);
      } else {
      }
  
      if (timestamp) {
        if (timestamp === "si") {
          embed.setTimestamp();
        } else if (timestamp === "no") {
        }
      } else {
      }
  
      if (autor) {
        embed.setAuthor({ name: autor });
      } else {
      }
  
      if (footer) {
        embed.setFooter({ text: footer });
      } else {
      }
  
      if (color) {
        if (color === "greyple") {
          embed.setColor("Greyple");
        } else {
        }
        if (color === "green") {
          embed.setColor("Green");
        } else {
        }
        if (color === "red") {
          embed.setColor("Red");
        } else {
        }
        if (color === "yellow") {
          embed.setColor("Yellow");
        } else {
        }
        if (color === "aqua") {
          embed.setColor("Aqua");
        } else {
        }
      } else {
      }
  
      await channel.send({ embeds: [embed] });
  
      await interaction.reply({
        embeds: [embed2.setDescription(`✅ ¡El embed se envio correctamente!`)],
      });
    },
  };