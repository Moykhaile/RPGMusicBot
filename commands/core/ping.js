const ms = require('ms');

module.exports = {
    name: 'ping',
    aliases: [],
    utilisation: '{prefix}ping',

    execute(client, message) {
        message.channel.send(`Pong! 🏓\nÚltima batida calculada ${ms(Date.now() - client.ws.shards.first().lastPingTimestamp, { long: true })} atrás **${client.ws.ping}ms** 🛰️`);
    },
};