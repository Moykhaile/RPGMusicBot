player.on('error', (queue, error) => {
    console.log(`Error emitted from the queue ${error.message}`);
});

player.on('connectionError', (queue, error) => {
    console.log(`Error emitted from the connection ${error.message}`);
});

player.on('trackStart', (queue, track) => {
    if (!client.config.opt.loopMessage && queue.repeatMode !== 0) return;
    queue.metadata.send(`Comecei a tocar ${track.title} em **${queue.connection.channel.name}**. 🎧`);
});

player.on('trackAdd', (queue, track) => {
    queue.metadata.send(`Música ${track.title} adicionada à fila. ✅`);
});

player.on('botDisconnect', (queue) => {
    queue.metadata.send('Fui manualmente desconectado do canal. ❌');
});

player.on('channelEmpty', (queue) => {
    queue.metadata.send('Todos saíram do canal, e eu também. ❌');
});

player.on('queueEnd', (queue) => {
    queue.metadata.send('Terminei de tocar a fila completa. ✅');
});