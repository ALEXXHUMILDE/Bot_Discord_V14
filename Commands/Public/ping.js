const {
    ChatInputCommandInteraction,
    SlashCommandBuilder,
    EmbedBuilder,
  } = require("discord.js");
  
  module.exports = {
    data: new SlashCommandBuilder()
      .setName("ping")
      .setDescription("Te respondere pong y con mi latencia."),
    /**
     *
     * @param {ChatInputCommandInteraction} interaction
     */
    execute(interaction, client) {
      const embed = new EmbedBuilder()
          .setTitle(`Ping de ${client.user.tag}`)
          .setDescription(`**🏓Pong!\nPing del bot:** __${client.ws.ping}ms__`)
          .setColor("a39676")
        interaction.reply({embeds: [embed]});
    }
  };