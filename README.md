# Messaggio di Benvenuto e Uscita dalla GUILD

Puoi usare il codice seguente per registrare la cartella events con le sottocartelle (da inserire nel vostro 'index.js').

```
// Registrazione Cartella "events"
const eventsFiles = fs.readdirSync("./events").filter((file) => file.endsWith(".js"));
for (const file of eventsFiles) {
  const event = require(`./events/${file}`);
  client.on(event.name, (...args) => event.execute(...args));
}
```
```
// Registrazione Sotto Cartelle "events"
const eventsFolder = fs.readdirSync("./events");
for (const folder of eventsFolder) {
  const eventsFolder = fs.readdirSync(`./events/${folder}`).filter((file) => file.endsWith(".js"));
  for (const file of eventsFolder) {
    const event = require(`./events/${folder}/${file}`);
    client.on(event.name, (...args) => event.execute(...args));
  }
}
```

## Contatti
Creato da Discord: Micr0n#9153
