# discord.js-benvenuto
Codice per mandare un messaggio e aggiungere il ruolo a l'utente in modo automatico.

Ricordo di aggiungere nel vostro index questo codice vi servirà per registrare la cartella e sottocartelle del file "events"

// Registrazione Cartella "events"
const eventsFiles = fs.readdirSync("./events").filter((file) => file.endsWith(".js"));
for (const file of eventsFiles) {
  const event = require(`./events/${file}`);
  client.on(event.name, (...args) => event.execute(...args));
}
// Registrazione Sotto Cartelle "events"
const eventsFolder = fs.readdirSync("./events");
for (const folder of eventsFolder) {
  const eventsFolder = fs.readdirSync(`./events/${folder}`).filter((file) => file.endsWith(".js"));
  for (const file of eventsFolder) {
    const event = require(`./events/${folder}/${file}`);
    client.on(event.name, (...args) => event.execute(...args));
  }
}
