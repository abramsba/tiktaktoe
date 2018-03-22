
const ttt = require('./index.js')

let game = ttt.game.play(ttt.game.ai.random(), ttt.game.ai.bad())
ttt.format.playback(game)
