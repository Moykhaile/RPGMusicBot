const { QueryType } = require('discord-player');
const maxVol = client.config.opt.maxVol;

module.exports = {
    name: 'play',
    aliases: ['p'],
    utilisation: '{prefix}play [nome da música/URL]',
    voiceChannel: true,

    async execute(client, message, args) {
        if (!args[0]) return message.channel.send(`Insira o nome ou o link da música. ❌`);

        const res = await player.search(args.join(' '), {
            requestedBy: message.member,
            searchEngine: QueryType.AUTO
        });

        if (!res || !res.tracks.length) return message.channel.send(`Nenhum resultado encontrado. ❌`);

        const queue = await player.createQueue(message.guild, {
            metadata: message.channel
        });

        try {
            if (!queue.connection) await queue.connect(message.member.voice.channel);
        } catch {
            await player.deleteQueue(message.guild.id);
            return message.channel.send(`Não consigo acessar o canal de voz. ❌`);
        }

        await message.channel.send(`Carregando sua ${res.playlist ? 'playlist' : 'faixa'}... 🎧`);

        res.playlist ? queue.addTracks(res.tracks) : queue.addTrack(res.tracks[0]);

        if (queue.volume > maxVol) queue.setVolume(maxVol);

        if (!queue.playing) await queue.play();
    },
};