module.exports = {
    name: 'stop',
    aliases: ['parar'],
    utilisation: '{prefix}stop',
    voiceChannel: true,

    execute(client, message) {
        const queue = player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`Não há nenhuma música tocando. ❌`);

        queue.destroy();

        message.channel.send(`Parei de tocar música. Até a próxima! ✅`);
    },
};