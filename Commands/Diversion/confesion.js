const {SlashCommandBuilder,EmbedBuilder} = require('discord.js')
const schema = require('../../Models/Confesiones')

module.exports = {
    data: new SlashCommandBuilder()
    .setName('confesion')
    .setDescription('Envia una confesion privada o publica.')
    .addBooleanOption(option=>
      option.setName('tipo')
      .setDescription('¿Enviar confesion Privada? || True: Si - False: No ')
      .setRequired(true)
    )
    .addStringOption(option=>
      option.setName('descripcion')
      .setDescription('Describe la confesion.')
      .setRequired(true)
    ),
    async execute(interaction, user){
      schema.findOne({ Guild:interaction.guild.id }, async(err, data)=>{
        const {options, guild} = interaction
        const channelConfesion = guild.channels.cache.get(data.Channel)
        const confesionCheck = options.getBoolean('tipo')
        const descripcionConfesion = options.getString('descripcion')

        const confesionEmbed = new EmbedBuilder()

        switch(confesionCheck){
          case true:
            confesionEmbed.setTitle('Nueva Confesion recibida 😳')
            .setDescription(`¡Es una confesion anonima!`)
            .setFields(
              {name:"Confesion:",value:`${descripcionConfesion}`}
            )
            .setColor('Random')
            .setTimestamp()
            channelConfesion.send({embeds:[confesionEmbed]})
            await interaction.reply({content:"Se ha enviado correctamente la confesion anonima.", ephemeral:true})
            break;
          case false:
            confesionEmbed.setTitle('Nueva Confesion recibida 😳')
            .setDescription(`¡Es una confesion publica!\nConfesion de: ${interaction.user}`)
            .setFields(
              {name:"Confesion:",value:`${descripcionConfesion}`}
            )
            .setColor('Random')
            .setTimestamp()
            channelConfesion.send({embeds:[confesionEmbed]})
            await interaction.reply({content:"Se ha enviado correctamente la confesion.", ephemeral:true})
            break;
        }
      })
    }
};
