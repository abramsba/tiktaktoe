
class DecentAI {

    constructor() {
        this.moves = []
        this.corners = [[0,0],[0,2],[2,0],[2,2]]
        this.corner = -1
        this.adj = [[[2,0],[0,2]],
                    [[0,0],[2,2]],
                    [[0,0],[2,2]],
                    [[2,0],[0,2]]]
        this.chk = [[[1,0],[0,1]],
                    [[0,1],[2,1]],
                    [[0,1],[2,1]],
                    [[2,1],[1,2]]]
    }

    decide(symbol, step, board) {
        // First move, moves on odds
        if ( step == 1 ) {
            let index = Math.floor(Math.random()*this.corners.length)
            let corner = this.corners[index]
            this.corner = index

            this.moves.push(corner)
            return corner
        }
        else if ( step == 3 ) {
            while(true) {
                let index = Math.floor(Math.random()*this.corners.length)
                let corner = this.corners[index]
                if ( board[corner[0]][corner[1]] === " " ) {
                    this.moves.push(corner)
                    return corner
                }
            }
        }
        else if ( step == 5 ) {
            let m0 = this.moves[0]
            let m1 = this.moves[1]
            let diffx = m0[1] - m1[1]
            let diffy = m0[0] - m1[0]
            if ( diffx != 0 ) {
                let chr1 = board[1][m0[1]]
                let chr2 = board[1][m1[1]]
                if ( chr1 === " " ) {
                    this.moves.push([1,m0[1]])
                    return [1,m0[1]]
                }
                else if ( chr2 === " " )  {
                    this.moves.push([1,m1[1]])
                    return [1,m1[1]]
                }
            }
            else if ( diffy != 0 ) {
                let chr = board[m0[1]][1]
                let mid = board[1][1]
                if ( chr === " " ) {
                    this.moves.push([m0[0],1])
                    return [m0[0],1]
                }
                else if ( mid === " " ) {
                    this.moves.push([1,1])
                    return [1,1]
                }
            }
        }
        else if ( step == 7 ) {
            let mid = board[1][1]
            if ( mid === " " ) {
                this.moves.push([1,1])
                return [1,1]
            }
            else {
                while(true) {
                    let xi = Math.floor(Math.random()*3)
                    let yi = Math.floor(Math.random()*3)
                    let chr = board[xi][yi]
                    if ( chr === " " ) {
                        this.moves.push([xi,yi])
                        return [xi, yi]
                    }
                }
            }
        }
        else if ( step == 9 ) {
            while(true) {
                let xi = Math.floor(Math.random()*3)
                let yi = Math.floor(Math.random()*3)
                let chr = board[xi][yi]
                if ( chr === " " ) {
                    this.moves.push([xi,yi])
                    return [xi, yi]
                }
            }
        }

        // Second move, probably can't win
        // so stop player 1 from winning
        else if ( step == 2 ) {
            let mid = board[1][1]
            if ( mid === " " ) {
                this.moves.push([1,1])
                return [1,1]
            }
            else {
                while(true) {
                    let index = Math.floor(Math.random()*this.corners.length)
                    let corner = this.corners[index]
                    let chr = board[corner[0]][corner[1]]
                    if ( chr === " " ) {
                        this.moves.push(corner)
                        return corner
                    }
                }
            }
        }
        else if ( step == 4 ) {
            while(true) {
                let c0  = board[0][0]
                let c1  = board[2][0]
                let c2  = board[0][2]
                let c3  = board[2][2]

                let m0  = board[1][0]
                let m1  = board[0][1]
                let m2  = board[1][2]
                let m3  = board[2][1]
                let mid = board[1][1]

                if ( c0 !== " " && c1 !== " " && m0 === " " ) {
                    this.moves.push([1,0])
                    return [1,0]
                }
                else if ( c1 !== " " && c3 !== " " && m3 === " " ) {
                    this.moves.push([2,1])
                    return [2,1]
                }
                else if ( c3 !== " " && c2 !== " " && m2 === " " ) {
                    this.moves.push([1,2])
                    return [1,2]
                }
                else if ( c2 !== " " && c0 !== " " && m1 === " " ) {
                    this.moves.push([0,1])
                    return [0,1]
                }
                else if ( ( c1 !== " " && c2 !== " " && mid === " " ) &&
                          ( c0 !== " " && c3 !== " " && mid === " " ) ) {
                    this.moves.push([1,1])
                    return [1,1]
                }
                else {
                    while(true) {
                        let xi = Math.floor(Math.random()*3)
                        let yi = Math.floor(Math.random()*3)
                        let chr = board[xi][yi]
                        if ( chr === " " ) {
                            this.moves.push([xi,yi])
                            return [xi, yi]
                        }
                    }
                }
            }
        }
        else if ( step == 6 ) {
            while(true) {
                let xi = Math.floor(Math.random()*3)
                let yi = Math.floor(Math.random()*3)
                let chr = board[xi][yi]
                if ( chr === " " ) {
                    this.moves.push([xi,yi])
                    return [xi, yi]
                }
            }
        }
        else if ( step == 8 ) {
            while(true) {
                let xi = Math.floor(Math.random()*3)
                let yi = Math.floor(Math.random()*3)
                let chr = board[xi][yi]
                if ( chr === " " ) {
                    this.moves.push([xi,yi])
                    return [xi, yi]
                }
            }
        }


    }



    name() {
        return "Not the worst ever AI"
    }
}

module.exports = DecentAI

