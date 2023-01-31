const Discord = require('discord.js');
const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
 
module.exports = {
  data: new SlashCommandBuilder()
  .setName('8ball')
  .setDescription('Hazme tu pregunta y la responderé.')
  .addStringOption(option =>
    option.setName('pregunta')
                .setDescription('¿Cual es tu pregunta?')
                .setRequired(true)
    ),
 
  execute ( interaction ) {
   const { options } = interaction;
   let rpts = ["Sí.", "No.", "Tal vez...", "No sé.", "Muy dudable.", "Podría ser...", "No creo.", "Sin dudas.", "Está decidido que no.", "Si, definitivamente.", "Puedes confiar en ello.", "Como lo veo, si.", "Lo mas probable.", "Buena perspectiva.", "Los signos apuntan que sí.", "Mejor no decirlo ahora.", "No cuentes con eso.", "Mis investigaciones dicen que no.", "Mala perspectiva."]
   let pregunta = interaction.options.getString("pregunta");
 
const embed = new EmbedBuilder()
        .setTitle('8Ball')
        .addFields(    
            { name: "pregunta:", value: `${pregunta}`},
            { name: `respuesta:`, value: `${rpts[Math.floor(Math.random()*rpts.length)]}`}
        )
        .setColor("a39676")
 
        interaction.reply({embeds: [embed]})
 
        }
 
    }
