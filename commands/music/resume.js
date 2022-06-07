module.exports = {
    name: 'resume',
    aliases: ['rs', 'resumir'],
    utilisation: '{prefix}resume',
    voiceChannel: true,

    execute(client, message) {
        const queue = player.getQueue(message.guild.id);

        if (!queue) return message.channel.send(`Não há nenhuma música tocando. ❌`);

        const success = queue.setPaused(false);

        return message.channel.send(success ? `Música atual: ${queue.current.title}, resumida. ✅` : `Algo deu errado. ❌`);
    },
};