module.exports = {
    name: 'pause',
    aliases: ['pausa', 'pausar'],
    utilisation: '{prefix}pause',
    voiceChannel: true,

    execute(client, message) {
        const queue = player.getQueue(message.guild.id);

        if (!queue) return message.channel.send(`Não há nenhuma música tocando. ❌`);

        const success = queue.setPaused(true);

        return message.channel.send(success ? `A música: ${queue.current.title}, foi pausada. ✅` : `Algo deu errado. ❌`);
    },
};