const {SlashCommandBuilder, EmbedBuilder} = require('discord.js')
const Schema = require('../../Models/Sugerencias')

module.exports = {
    data: new SlashCommandBuilder()
    .setName('sugerencia')
    .setDescription('Envia una sugerencia.')
    .addStringOption(option =>
        option.setName('nombre')
        .setDescription('Nombre de tu sugerencia')
        .setRequired(true)
    )
    .addStringOption(option =>
        option.setName('descripcion')
        .setDescription('Describe tu sugerencia')
        .setRequired(true)
    ),

    async execute(interacion, member){
        Schema.findOne({Guild:interacion.guild.id}, async(err, data)=>{
            if(!data) return;
            const {guild, options} = interacion
            const descripcion = options.getString('descripcion')
            const nombre = options.getString('nombre')
            const suggestChannel = guild.channels.cache.get(data.Channel)

            const suggestEmbed = new EmbedBuilder()
            .setTitle(`Sugerencia de ${interacion.user.tag}`)
            .setColor('Random')
            .addFields({name:"Sugerencia", value:`${nombre}`},{name:'Descripcion', value:`${descripcion}`})
            .setFooter({text:interacion.user.tag, iconURL:interacion.user.displayAvatarURL({dynamic:true})})
            .setTimestamp()
           
            const message = await suggestChannel.send({
                embeds: [suggestEmbed],
                fetchReply: true,
              });
          
              message.react(`👍`);
              message.react(`👎`);
        })

        return interacion.reply({content:"Se ha enviado correctamente la sugerencia.", ephemeral: true})
    }
};
