module.exports = {
    name: 'filter',
    aliases: ['filtrar'],
    utilisation: '{prefix}filter [nome do filtro]',
    voiceChannel: true,

    async execute(client, message, args) {
        const queue = player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`Não há nenhuma música tocando. ❌`);

        const actualFilter = queue.getFiltersEnabled()[0];

        if (!args[0]) return message.channel.send(`Por favor, especifique um filtro válido para ligar ou desligar, ${message.author}. ❌\n${actualFilter ? `Filtros ativos: ${actualFilter} (${client.config.app.px}filter ${actualFilter} para desligá-los).\n` : ''}`);

        const filters = [];

        queue.getFiltersEnabled().map(x => filters.push(x));
        queue.getFiltersDisabled().map(x => filters.push(x));

        const filter = filters.find((x) => x.toLowerCase() === args[0].toLowerCase());

        if (!filter) return message.channel.send(`Esse filtro não existe. ❌\n${actualFilter ? `Filtros ativos: ${actualFilter}.\n` : ''}Lista de filtros disponíveis: ${filters.map(x => `**${x}**`).join(', ')}.`);

        const filtersUpdated = {};

        filtersUpdated[filter] = queue.getFiltersEnabled().includes(filter) ? false : true;

        await queue.setFilters(filtersUpdated);

        message.channel.send(`O filtro ${filter} agora está **${queue.getFiltersEnabled().includes(filter) ? 'ligado' : 'desligado'}** ✅\n*Lembre-se, mais longa a música, mais isso vai demorar.*`);
    },
};