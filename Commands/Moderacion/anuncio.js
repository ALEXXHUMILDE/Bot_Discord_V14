const { 
    SlashCommandBuilder, 
    EmbedBuilder, 
    PermissionFlagsBits, 
    ChannelType } = require('discord.js')

module.exports = {
    data: new SlashCommandBuilder()
        .setName('anuncio')
        .setDescription('Envia un anuncio.')
        .setDefaultMemberPermissions(PermissionFlagsBits.Administrator)
        .addChannelOption(option => option.setName('canal').setDescription('Canal donde se enviara el anuncio.').addChannelTypes(ChannelType.GuildText).setRequired(true))
        .addRoleOption(option => option.setName('rol').setDescription('El rol que quieres @ (pingear).').setRequired(true))
        .addStringOption(option => option.setName('titulo').setDescription('Titulo del embed.').setRequired(true))
        .addStringOption(option => option.setName('mensaje').setDescription('Mensaje del anuncio.').setRequired(true))
        .addStringOption(option => option.setName('color').setDescription('Color del embed.').setRequired(false))
        .addStringOption(option => option.setName('imagen').setDescription('Imagen del embed.').setRequired(false)),
    async execute(interaction) {
        const { options } = interaction;

        const canal = options.getChannel('canal');
        const rol = options.getRole('rol');
        const titulo = options.getString('titulo');
        const mensaje = options.getString('mensaje');
        const color = options.getString('color') || "DarkButNotBlack";
        const imagen = options.getString('imagen') || null;

        const embed = new EmbedBuilder()
            .setTitle(`${titulo}`)
            .setColor(`${color}`)
            .setDescription(`${mensaje}`)
            .setImage(imagen)

        await canal.send({ embeds: [embed], content: `${rol}` })
        await interaction.reply({ content: `Anuncio enviado a el canal: **${canal}**`, ephemeral: true })
    }
}