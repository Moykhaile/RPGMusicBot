const maxVol = client.config.opt.maxVol;

module.exports = {
    name: 'volume',
    aliases: ['vol'],
    utilisation: `{prefix}volume [1-${maxVol}]`,
    voiceChannel: true,

    execute(client, message, args) {
        const queue = player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`Não há nenhuma música tocando. ❌`);

        const vol = parseInt(args[0]);

        if (!vol) return message.channel.send(`O volume atual é de ${queue.volume}% 🔊\n*Para mudar, escreva um número válido entre **1** e **${maxVol}**.*`);

        if (queue.volume === vol) return message.channel.send(`Esse já é o volume atual. ❌`);

        if (vol < 0 || vol > maxVol) return message.channel.send(`O número indicado não é válido. Escreva um número válido entre **1** e **${maxVol}**. ❌`);

        const success = queue.setVolume(vol);

        return message.channel.send(success ? `O volume mudou para **${vol}**/**${maxVol}**% 🔊` : `Algo deu errado. ❌`);
    },
};