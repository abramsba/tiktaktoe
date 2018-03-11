
const RandomAI = require('./randomai.js')
const DecentAI = require('./decentai.js')
const Engine = require('./engine.js')

function play() {
    let engine = undefined
	if ( arguments.length == 0 )
		engine = new Engine(new DecentAI(), new RandomAI())
    else if ( arguments.length == 1 )
        engine = new Engine(arguments[0], new RandomAI())
    else if ( arguments.length == 2 )
        engine = new Engine(arguments[0], arguments[1])
    return engine.run()
}

function recap(game) {
    console.log("Steps: ", game.step)
    console.log("Victor: ", game.victory)
    console.log("X: ", game.x)
    console.log("O: ", game.o)
    console.log("Each Step: ")
    let out = [ "  0 | ", "  1 | ", "  2 | " ]
    game.summary.forEach(s => {
        let ss = s.split("\n")
        out[0] = out[0] + ss[0] + " | "
        out[1] = out[1] + ss[1] + " | "
        out[2] = out[2] + ss[2] + " | "
    })
    console.log("      012")
    console.log("      ___")
    console.log(out.join("\n"))
}

module.exports = {
	play: play,
	recap: recap,
    ai: {
        random: () => new RandomAI(),
        decent: () => new DecentAI()
    }
}

