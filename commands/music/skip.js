module.exports = {
    name: 'skip',
    aliases: ['sk', 'pular'],
    utilisation: '{prefix}skip',
    voiceChannel: true,

    execute(client, message) {
        const queue = player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`Não há nenhuma música tocando. ❌`);

        const success = queue.skip();

        return message.channel.send(success ? `Música atual ${queue.current.title} pulada. ✅` : `Algo deu errado. ❌`);
    },
};