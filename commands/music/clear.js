module.exports = {
    name: 'clear',
    aliases: ['cq'],
    utilisation: '{prefix}clear',
    voiceChannel: true,

    async execute(client, message) {
        const queue = player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`Não há nenhuma música tocando. ❌`);

        if (!queue.tracks[0]) return message.channel.send(`Não há nenhuma música após essa na fila. ❌`);

        await queue.clear();

        message.channel.send(`A fila foi limpa! 🗑️`);
    },
};