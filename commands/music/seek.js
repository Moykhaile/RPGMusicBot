const ms = require('ms');

module.exports = {
    name: 'seek',
    aliases: ['ir'],
    utilisation: '{prefix}seek [tempo]',
    voiceChannel: true,

    async execute(client, message, args) {
        const queue = player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`Não há nenhuma música tocando. ❌`);

        const timeToMS = ms(args.join(' '));

        if (timeToMS >= queue.current.durationMS) return message.channel.send(`O tempo indicado é maior que a duração total da música. ❌\n*Tente, por exemplo, um valor como **5s, 10s, 20 seconds, 1m**...*.`);

        await queue.seek(timeToMS);

        message.channel.send(`Tempo ajustado na música **${ms(timeToMS, { long: true })}**. ✅`);
    },
};