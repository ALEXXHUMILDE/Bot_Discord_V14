**Source Code de bot de Discord en la v14 y gratis!**

## ¿Como inicio el bot?

1. Para iniciar el bot tienes que poner lo siguiente en la terminal:

   ```node .```

## ¿Porque me da error a la hora de que prendo el bot?

1. Lo mas seguro es que no has instalado los paquetes para iniciar el bot, para instalar los paquetes, tienes que poner lo siguiente en la terminal: 

   ```npm i```

2. Si aun te da error a la hora de prender el bot, lo mas seguro es que no has puesto del token del bot, para poner el token del bot, primero tienes que conseguirlo, y para conseguirlo tienes que ir a la pagina de [Discord Developers](https://discord.com/developers/applications), despues vas al bot, y despues vas a donde dice Bot y por ultimo darle en donde dice **Reset Token** y por ultimo vuelves a vsc y vas al archivo **config.json** y donde dice **token aqui** pegas el token del bot (recuerda no pasarle el token a nadie, si no, tienen el control completo de tu bot).

## ¿Como puedo desinstalar un paquete?

Para desinstalar un paquete, tienes que pones lo siguiente en la terminal: 

   ```npm uninstall <nombre del paquete>```

## ¿Como puedo recargar los comandos y eventos de mi bot desde Discord?

Para recargar los comandos y eventos desde Discord sin la necesidad de recargarlo desde la terminal, primero, tienes que pones tu ID en **Events/Interactions/SlashCommand** y en la linea **19** donde dice **tu ID aqui**, pegas tu ID, y reinicias el bot y despues vas a Discord y usas el comando /reload commands para recargar los comandos y /reload events para recargar los eventos.
