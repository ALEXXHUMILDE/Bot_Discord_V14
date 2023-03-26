
const {
    ChatInputCommandInteraction,
    SlashCommandBuilder,
    EmbedBuilder,
  } = require("discord.js");
  
  module.exports = {
    data: new SlashCommandBuilder()
      .setName("8ball")
      .setDescription("Respondere tu pregunta con una respuesta aleatoria.")
      .addStringOption((option) =>
        option
          .setName(`pregunta`)
          .setDescription(`¿Cuál será tu pregunta?`)
          .setRequired(true)
      ),
    /**
     *
     * @param {ChatInputCommandInteraction} interaction
     */
    async execute(interaction) {
      const pregunta = interaction.options.getString(`pregunta`);
  
      let respuestas = [
        "Si",
        "No",
        "No lo se",
        "Quiza",
        "Puede que si",
        "Puede que no",
        "Claramente si",
        "Claramente no",
      ];
  
      const respuesta = Math.floor(Math.random() * respuestas.length);
  
      const embed = new EmbedBuilder().addFields(
        {
          name: `Pregunta de ${interaction.user.username}`,
          value: `${pregunta}`,
        },
        { name: `Mi respuesta es:`, value: `${respuestas[respuesta]}` }
      );
  
      await interaction.reply({ embeds: [embed] });
    },
  };