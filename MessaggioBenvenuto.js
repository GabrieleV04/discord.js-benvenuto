const { MessageEmbed } = require('discord.js');

module.exports = {
    name: "guildMemberAdd",
    execute(member) {
        // Stanza Benvenuto
        const LogChannel = client.channels.cache.get('ID-CANALE'); // ID Canale
        // Ruolo da aggiungere
        const ruolo = member.guild.roles.cache.find(r => r.id === "ID-RUOLO"); // Ruolo

        // Messaggio di Benvenuto
        const UtenteEntrato = new MessageEmbed()
            .setTitle('Benvenuto')
            .setColor('RANDOM')
            .setDescription(`> Hola👋 <@${member.id}>\n> Benvenuto/a fatti un giro e goditi la community!`)
            .setTimestamp()

        // Aggiungi Ruoli
        member.roles.add(ruolo);

        LogChannel.send({ embeds: [UserJoined] });
    }
}
