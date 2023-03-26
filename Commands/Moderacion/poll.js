const { SlashCommandBuilder, EmbedBuilder, PermissionFlagsBits } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
    .setName("encuesta")
    .setDescription("Realiza una encuesta para el Servidor.")
    .setDefaultMemberPermissions(PermissionFlagsBits.Administrator)
    .addStringOption(option =>
        option.setName("descripcion")
        .setDescription("Descripcion de la encuesta.")
        .setRequired(true)
        )

        .addChannelOption(option =>
            option.setName("canal")
            .setDescription("¿En que canal quieres hacer la encuesta?")
            .setRequired(true)
            ),
            async execute(interaction) {
                const { options, user, guild } = interaction;

                const canal = options.getChannel("canal")
                const descripcion = options.getString("descripcion")

                const embed = new EmbedBuilder()
                .setTitle(`Encuesta | ${guild.name}`)
                .setColor("a39676")
                .setDescription(descripcion)
                .setFooter({ text: `Encuesta creada por: ${interaction.user.username}`, iconURL: `${user.displayAvatarURL({ dynamic: true })}` })
                .setTimestamp();

                try {
                    const m = await canal.send({ embeds: [embed] });
                    await m.react("✅")
                    await m.react("❌")
                    await interaction.reply({ content: "¡Se ha enviado correctamente la encuesta!", ephemeral: true })
                } catch (err) {
                    console.log(err)
                }
            }
}