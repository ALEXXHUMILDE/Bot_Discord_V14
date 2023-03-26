const mongoose = require("mongoose");

async function connectDatabase() {
    await mongoose.connect("mongodb+srv://alexxd:Z0LoZDRLKVtZN9Uu@alexxd.rrxvmj8.mongodb.net/?retryWrites=true&w=majority")
    console.log("[MongoDB] ¡Se ha conectado correctamente la Base de Datos.")
}

module.exports = connectDatabase