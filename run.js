
const ttt = require('./index.js')
let out1 = ttt.play(ttt.ai.decent(), ttt.ai.random())
let out2 = ttt.play(ttt.ai.random(), ttt.ai.decent())
ttt.recap(out1)
ttt.recap(out2)


