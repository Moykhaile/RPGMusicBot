module.exports = (client, int) => {
    if (!int.isButton()) return;

    const queue = player.getQueue(int.guildId);

    switch (int.customId) {
        case 'saveTrack': {
            if (!queue || !queue.playing) return int.reply({ content: `Não há nenhuma música tocando. ❌`, ephemeral: true, components: [] });

            int.member.send(`Você salvou a música ${queue.current.title} | ${queue.current.author} do servidor ${int.member.guild.name}. ✅`).then(() => {
                return int.reply({ content: `Te enviei o título da música nas suas DMs. ✅`, ephemeral: true, components: [] });
            }).catch(error => {
                return int.reply({ content: `Não consigo te enviar uma mensagem direta. ❌`, ephemeral: true, components: [] });
            });
        }
    }
};