
const ttt = require('./index.js')

let game = ttt.game.play(
    ttt.game.scrollai(),
    ttt.game.testai()
);
ttt.format.playback(game)

