const {
  ChatInputCommandInteraction,
  SlashCommandBuilder,
  EmbedBuilder,
  PermissionFlagsBits,
} = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("ban")
    .setDescription("Banear a un usuario.")
    .addUserOption((option) =>
      option
        .setName(`usuario`)
        .setDescription(`Usuario a banear.`)
        .setRequired(true)
    )
    .addStringOption((option) =>
      option.setName(`razon`).setDescription(`Razon del ban.`)
    )
    .setDefaultMemberPermissions(PermissionFlagsBits.KickMembers),
  /**
   *
   * @param {ChatInputCommandInteraction} interaction
   */
  async execute(interaction, client) {
    const user = interaction.options.getUser(`usuario`);
    const { guild } = interaction;

    let razon = interaction.options.getString(`razon`);
    const member = await interaction.guild.members
      .fetch(user.id)
      .catch(console.error);

    if (!razon) razon = "No hay razón.";
    if (user.id === interaction.user.id)
      return interaction.reply({
        content: `<a:_:1082895947106889820> |  ¡No puedes banearte a ti mismo!`,
        ephemeral: true,
      });
    if (user.id === client.user.id)
      return interaction.reply({
        content: `<a:_:1082895947106889820> |  ¡No puedes banearme a mi!`,
        ephemeral: true,
      });
    if (
      member.roles.highest.position >= interaction.member.roles.highest.postion
    )
      return interaction.reply({
        content: `<a:_:1082895947106889820> | ¡No puedes banear a alguien con un rol igual o superior al tuyo!`,
        ephemeral: true,
      });
    if (!member.kickable)
      return interaction.reply({
        content: `<a:_:1082895947106889820> |  ¡No puedo banear a alguien con un rol superior al mio!`,
        ephemeral: true,
      });

    const embed = new EmbedBuilder()
      .setTitle(`<a:_:1082896003448963172> Usuario baneado`)
      .setDescription(`**${user.tag}** fue baneado exitosamente del servidor!\n\n**Razón:**\n${razon}`)
      .setColor(`#ff0000`)
      .setTimestamp()
      .setThumbnail(`${user.displayAvatarURL({ dynamic: true })}`)

    await member
      .ban({ deleteMessageSeconds: 0, reason: razon })
      .catch(console.error);

    interaction.reply({ embeds: [embed] });
  },
};