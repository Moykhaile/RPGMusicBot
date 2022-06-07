module.exports = {
    name: 'save',
    aliases: ['sv', 'salvar'],
    utilisation: '{prefix}save',
    voiceChannel: true,

    async execute(client, message) {
        const queue = player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`Não há nenhuma música tocando. ❌`);

        message.author.send(`Você salvou a música ${queue.current.title} | ${queue.current.author} do servidor ${message.guild.name}. ✅`).then(() => {
            message.channel.send(`Te enviei o título da música nas suas DMs. ✅`);
        }).catch(error => {
            message.channel.send(`Não consigo te enviar uma mensagem direta. ❌`);
        });
    },
};