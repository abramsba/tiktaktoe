
const ttt = require('./index.js')

let game = ttt.game.play(ttt.game.ai.bad(), ttt.game.ai.bad())
//ttt.format.recap(game)
ttt.format.playback(game)
