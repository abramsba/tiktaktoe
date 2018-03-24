
const ttt = require('./index.js')

let game = ttt.game.play(
    ttt.game.testai(),
    ttt.game.testai()
);
ttt.format.playback(game)
