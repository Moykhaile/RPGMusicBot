module.exports = {
    name: 'back',
    aliases: ['previous'],
    utilisation: '{prefix}back',
    voiceChannel: true,

    async execute(client, message) {
        const queue = player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`Não há nenhuma música tocando. ❌`);

        if (!queue.previousTracks[1]) return message.channel.send(`Não havia nenhuma música tocando antes. ❌`);

        await queue.back();

        message.channel.send(`Tocando a faixa **anterior**. ✅`);
    },
};