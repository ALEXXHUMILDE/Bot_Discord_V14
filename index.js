const {
  Client,
  GatewayIntentBits,
  Partials,
  Collection,
} = require("discord.js");
const mongoose = require("mongoose")
const config = require("./config.json")
const { Guilds, GuildMembers, GuildMessages } = GatewayIntentBits;
const { User, Message, GuildMember, ThreadMember } = Partials;
const client = new Client({
  intents: 3276799,
  partials: [User, Message, GuildMember, ThreadMember],
});

const { loadEvents } = require("./Handlers/eventHandler");

//Base de Datos (MongoDB)
const database = require("./Database/mongoose")
database()

client.config = require("./config.json");
client.events = new Collection();
client.commands = new Collection();

loadEvents(client);

require(`./Handlers/anti-crash`)(client);

client.login(client.config.token);