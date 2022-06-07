module.exports = {
    name: 'shuffle',
    aliases: ['sh'],
    utilisation: '{prefix}shuffle',
    voiceChannel: true,

    async execute(client, message) {
        const queue = player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`Não há nenhuma música tocando. ❌`);

        if (!queue.tracks[0]) return message.channel.send(`Não há nenhuma música tocando depois desta. ❌`);

        await queue.shuffle();

        return message.channel.send(`Fila embaralhada. **${queue.tracks.length}** música(s). ✅`);
    },
};