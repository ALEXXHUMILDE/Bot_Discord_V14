const { ChatInputCommandInteraction, SlashCommandBuilder, PermissionFlagsBits, Client, EmbedBuilder } = require("discord.js");

const { loadCommands } = require(`../../Handlers/commandHandler`)
const { loadEvents } = require(`../../Handlers/eventHandler`);

module.exports = {
    developer: true,
    data: new SlashCommandBuilder()
    .setName(`reload`)
    .setDescription(`Recarga tus comandos o eventos.`)
    .setDefaultMemberPermissions(PermissionFlagsBits.Administrator)
    .addSubcommand((options) => options.setName(`events`).setDescription(`Recarga tus eventos.`))
    .addSubcommand((options) => options.setName(`commands`).setDescription(`Recarga tus comandos.`)),

    /**
     * 
     * @param {ChatInputCommandInteraction} interaction 
     * @param {Client} client 
     */

    execute(interaction, client) {
        const subCommand = interaction.options.getSubcommand();

        switch (subCommand) {
            case "events": 
            {
                for (const [key, value] of client.events)
                client.removeListener(`${key}`, value, true);
                loadEvents(client);

                const embed = new EmbedBuilder()
                .setTitle(`Reload de ${client.user.username}`)
                .setDescription("¡Se han recargado exitosamente los **Eventos**!")
                .setColor("a39676")
              interaction.reply({embeds: [embed], ephemeral: true});
            }

            break;
            case "commands": {
                loadCommands(client);
                const embed1 = new EmbedBuilder()
                .setTitle(`Reload de ${client.user.username}`)
                .setDescription("<a:_:1082896003448963172> ¡Se han recargado exitosamente los **Comandos**!")
                .setColor("a39676")
              interaction.reply({embeds: [embed1], ephemeral: true});
            }
        }
    }
}