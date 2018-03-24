
class RandomAI {
    decide(symbol, step, board) {
        while(true) {
            let x = Math.floor(Math.random()*3)
            let y = Math.floor(Math.random()*3)
            let chr = board[x][y]
            console.log(x, y)
            if ( chr === " " )
                return [x, y]
        }
    }
    name() {
        return "RandomAI"
    }
}

module.exports = RandomAI
