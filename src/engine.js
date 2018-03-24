
class Engine {

    constructor(x, o) {
        this.board = [[" ", " ", " "],
                      [" ", " ", " "],
                      [" ", " ", " "]]
        this.x = x
        this.o = o
    }

    run() {
        let step = 0;
        let summary = [];
        while(true) {

            var xwin = undefined
            try {
                xwin = this.turn_x(++step)
            }
            catch (err) {
                return { step: step, victory: " ", summary: summary, x: this.x.name(), o: this.o.name(), error: { cause: "X", err: err } }
            }
            summary.push(this.mapString());
            if ( xwin )
                return { step: step, victory: "X", summary: summary, x: this.x.name(), o: this.o.name() }

            if ( step >= 9 )
                return { step: step, victory: " ", summary: summary, x: this.x.name(), o: this.o.name() }

            var owin = undefined
            try {
                owin = this.turn_o(++step)
            }
            catch (err) {
                return { step: step, victory: " ", summary: summary, x: this.x.name(), o: this.o.name(), error: { cause: "O", err: err } }
            }
            summary.push(this.mapString());
            if ( owin )
                return { step: step, victory: "O", summary: summary, x: this.x.name(), o: this.o.name() }

            if ( step >= 9 )
                return { step: step, victory: " ", summary: summary, x: this.x.name(), o: this.o.name() }
        }
    }

    turn_x(step) {
        let xd = this.x.decide("X", step, this.copyBoard())
        if ( xd ) {
            if ( this.board[xd[1]][xd[0]] === " " )
                this.board[xd[1]][xd[0]] = "X"
            else
                throw new Error('Invalid position supplied: '+xd)
        }
        return this.check_x()
    }

    turn_o(step) {
        let od = this.o.decide("O", step, this.copyBoard())
        if ( od )
            if ( this.board[od[1]][od[0]] === " " )
                this.board[od[1]][od[0]] = "O"
            else
                throw 'Invalid position supplised'
        return this.check_o()
    }

    check_x() {
        const xcheck = /(X..\n.X.\n..X|..X\n.X.\nX|XXX|\nXXX|\n\nXXX|X..\nX..\nX..|.X.\n.X.\n.X.|..X\n..X\n..X)/
        if ( this.mapString().match(xcheck) )
            return true
        return false
    }

    check_o() {
        const ocheck = /(O..\n.O.\n..O|..O\n.O.\nO|OOO|\nOOO|\n\nOOO|O..\nO..\nO..|.O.\n.O.\n.O.|..O\n..O\n..O)/
        if ( this.mapString().match(ocheck) )
            return true
        return false
    }

    copyBoard() {
        return [ this.board[0].slice(), this.board[1].slice(), this.board[2].slice() ]
    }

    mapString() {
        let out = this.board[0][0] + this.board[0][1] + this.board[0][2] + "\n" +
                  this.board[1][0] + this.board[1][1] + this.board[1][2] + "\n" +
                  this.board[2][0] + this.board[2][1] + this.board[2][2]
        return out
    }

}

module.exports = Engine

