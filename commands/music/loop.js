const { QueueRepeatMode } = require('discord-player');

module.exports = {
    name: 'loop',
    aliases: ['lp', 'repeat'],
    utilisation: '{prefix}loop <queue>',
    voiceChannel: true,

    execute(client, message, args) {
        const queue = player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`Não há nenhuma música tocando. ❌`);

        if (args.join('').toLowerCase() === 'queue') {
            if (queue.repeatMode === 1) return message.channel.send(`Desligue o loop da música atual primeiro (${client.config.app.px}loop). ❌`);

            const success = queue.setRepeatMode(queue.repeatMode === 0 ? QueueRepeatMode.QUEUE : QueueRepeatMode.OFF);

            return message.channel.send(success ? `Loop **${queue.repeatMode === 0 ? 'desligado' : 'ligado'}**. A fila inteira será tocada em repetição. 🔁` : `Algo deu errado. ❌`);
        } else {
            if (queue.repeatMode === 2) return message.channel.send(`Desligue primeiro o loop da fila atual primeiro (${client.config.app.px}loop queue). ❌`);

            const success = queue.setRepeatMode(queue.repeatMode === 0 ? QueueRepeatMode.TRACK : QueueRepeatMode.OFF);

            return message.channel.send(success ? `Loop **${queue.repeatMode === 0 ? 'desligado' : 'ligado'}**. A música atual será tocada em repetição (você pode ligar para a fila com a opção <queue>). 🔂` : `Algo deu errado. ❌`);
        };
    },
};