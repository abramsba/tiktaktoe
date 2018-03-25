
class ScrollAI {
    decide(symbol, step, board) {
        return this.intpos(this.nextpos(step, board))
    }
    name() {
        return "Scrolling AI"
    }
    nextpos(i,board) {
        let p = this.intpos(i)
        let c = board[p[1]][p[0]]
        console.log(i, p)
        if ( c == ' ' )
            return i
        this.nextpos(i+1, board)
    }
    intpos(i) {
        switch(i) {
            case 1: return [0,0]
            case 2: return [1,0]
            case 3: return [2,0]
            case 4: return [0,1]
            case 5: return [1,1]
            case 6: return [2,1]
            case 7: return [1,2]
            case 8: return [0,2]
            case 9: return [2,2]
        }
    }
}

module.exports = ScrollAI
