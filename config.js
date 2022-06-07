module.exports = {
    app: {
        px: '!!',
        token: 'NDc0MDQ2NzE5OTk5NDc1NzEz.G0lJlU.P6EbRALv2rdJ1o6VrLjuUoz7I1sORBt_zF9PHQ',
        playing: 'música'
    },

    opt: {
        DJ: {
            enabled: false,
            roleName: 'DJ',
            commands: ['back', 'clear', 'filter', 'loop', 'pause', 'resume', 'seek', 'shuffle', 'skip', 'stop', 'volume']
        },
        maxVol: 100,
        loopMessage: false,
        discordPlayer: {
            ytdlOptions: {
                quality: 'highestaudio',
                highWaterMark: 1 << 25
            }
        }
    }
};
