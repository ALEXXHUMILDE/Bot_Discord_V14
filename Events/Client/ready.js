const { Client, ActivityType } = require("discord.js");
const mongoose = require("mongoose")
const { loadCommands } = require("../../Handlers/commandHandler");
const config = require("../../config.json")

module.exports = {
  name: "ready",
  once: true,
 async execute(client) {

    console.log(`${client.user.tag} se ha conectado correctamente`);

    loadCommands(client);

    //client.user.setPresence({ activities: [{type: ActivityType.Playing , name: `${client.guilds.cache.size} servidores` }], status: "online"})

    const tiempo = (1000*5)

    let status = [

      [{
        name: "/help | humilde.ml",
        type: ActivityType.Playing

      }],
      [{
        name: `${client.users.cache.size} usuarios!`,
        type: ActivityType.Watching
        
      }],
      [{
        name: `${client.guilds.cache.size} servidores!`,
        type: ActivityType.Watching
        
      }]

    ];
    setInterval(() => {
      function randomStatus() {
        let astatus = status[Math.floor(Math.random() * status.length)];
        client.user.setPresence({ activities: astatus, status: "online" })
      }
      randomStatus();
    }, tiempo)

  }, 
};