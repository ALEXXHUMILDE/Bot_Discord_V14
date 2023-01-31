const { SlashCommandBuilder, EmbedBuilder, PermissionFlagsBits } = require('discord.js');



module.exports = {
    data: new SlashCommandBuilder()
        .setName('create-embed')
        .setDescription('Customize an embed.')
        .setDefaultMemberPermissions(PermissionFlagsBits.Administrator)
        .addStringOption(option =>
            option.setName('titulo')
                .setDescription('¿Cual sera el titulo del Embed?')
                .setRequired(true)
        )
        .addStringOption(option =>
            option.setName('descripcion')
                .setDescription('¿Cual sera la descripcion del Embed?.')
                .setRequired(true)
        )
        .addStringOption(option =>
            option.setName('color')
                .setDescription('Introduce un codigo Hex de un maximo de 6 numeros.')
                .setRequired(true)
                .setMaxLength(6)
        )
        .addStringOption(option =>
            option.setName('imagen')
                .setDescription('Pegue el URL de la imagen. (Imagen grande en la parte inferior)')
                .setRequired(false)
        )
        .addStringOption(option =>
            option.setName('thumbnail')
                .setDescription('Pegue el URL de la imagen. (Imagen pequeña en la parte superior derecha.)')
                .setRequired(false)
        )
        .addStringOption(option =>
            option.setName('nombre-de-campo')
                .setDescription('Establecer el nombre de campo para el Embed.')
                .setRequired(false)
        )
        .addStringOption(option =>
            option.setName('valor-campo')
                .setDescription('Establece el valor del campo para el Embed.')
                .setRequired(false)
        )
        .addAttachmentOption(option =>
            option.setName('archivo')
                .setDescription('Un archivo con el Embed. (Se muestra arriba de el Embed)')
                .setRequired(false)
        ),
    async execute(interaction) {
        const { options } = interaction;

        const title = options.getString('titulo');
        const description = options.getString('descripcion');
        const color = options.getString('color');
        const image = options.getString('imagen');
        const thumbnail = options.getString('thumbnail');
        const fieldn = options.getString('nombre-de-campo') || "** **";
        const fieldv = options.getString('valor-campo') || " ";
        const file = options.getAttachment('archivo')

        const embed = new EmbedBuilder()
            .setTitle(title)
            .setDescription(description)
            .setColor(`0x${color}`)
            .setImage(image)
            .setThumbnail(thumbnail)
            .setTimestamp()
            .addFields(
                { name: `${fieldn}`, value: `${fieldv}` }
            )
            .setFooter({ text: interaction.member.user.tag, iconURL: interaction.member.displayAvatarURL({ dynamic: true }) })
     
              interaction.channel.send({ embeds: [embed]});
        await interaction.reply({content: `Embed enviado correctamente `});
    },
};