
const RandomAI = require('./randomai.js')
const Engine = require('./engine.js')

/*
 * Example usage:
 * play() = RandomAI versus RandomAI
 * play(p1, p2) = Player1 AI versus Player2 AI
 */
function play() {
    let engine = undefined
	if ( arguments.length == 0 )
		engine = new Engine(new RandomAI(), new RandomAI())
    else if ( arguments.length == 2 )
        engine = new Engine(arguments[0], arguments[1])
    return engine.run()
}

module.exports = {
	play: play,
    testai: () => new RandomAI()
}

