const {SlashCommandBuilder,PermissionFlagsBits,ChannelType} = require('discord.js')
const schema = require('../../Models/Confesiones')

module.exports = {
    data: new SlashCommandBuilder()
    .setName('setup-confesiones')
    .setDescription('Establece un canal para las confesiones.')
    .addChannelOption(option=>
        option.setName('canal')
        .setDescription('Elige el canal.')
        .addChannelTypes(ChannelType.GuildText)
        .setRequired(true)
    ),
    async execute(interaction){
        const {options} = interaction
        const canal = options.getChannel('canal')

        schema.findOne({Guild: interaction.guild.id}, async (err, data) =>{
            if(!data){
                const newConfesiones = await schema.create({
                    Guild: interaction.guild.id,
                    Channel: canal.id
                })
            }
            return interaction.reply({content: `Se ha configurado exitosamente el canal: ${canal}, ahora en el canal llegaran todas las confesiones.`, ephemeral:true})
        })
    }
};
