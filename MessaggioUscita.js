const { MessageEmbed } = require('discord.js');

module.exports = {
    name: "guildMemberRemove",
    execute(member) {
       // Stanza Log
       const LogChannel = client.channels.cache.get('ID-CANALE'); // ID Canale

       // Messaggio di Uscita
       const utenteUscito = new MessageEmbed()
       .setTitle('> Log Uscita da Discord')
       .setColor('RED')
       .setDescription(`> Utente・\`${member.user.tag}\``)
       .setTimestamp()

       return LogChannel.send({ embeds: [utenteUscito] });
    }
}
