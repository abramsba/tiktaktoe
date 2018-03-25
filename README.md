
# tic-tak-toe

Game engine for playing tic-tac-toe, or in Nederlands "boter, kaas, en eieren", with artifical intelligence. 

## Requirements

* `node`
* `yarn`
* `git`
* text editor
* terminal
    * Windows: Git bash included with git install https://git-scm.com/
    * Osx: Default terminal works fine, iTerm2 is avaliable https://www.iterm2.com/
    * Sublime: OSX/Linux users can use https://packagecontrol.io/packages/TerminalView

## Installing engine

Players can run the engine locally by including this repository as a development dependency via yarn.

`yarn add git https://github.com/abramsba/tiktaktoe.git --dev`

## How it works

The engine will create a new game and alternate between allowing player X and player O to make decisions. In order to mark a position on the board, participants will have to provide the implementation of an interface which the engine uses to change the game state. Players are not creating the game loop. When it is the player's turn, the engine will call the interface implementation provided by the player to make the next move. 

### Live demo

The engine has a test script which plays an animation of two players playing making random decisions.

```
git clone https://github.com/abramsba/tiktaktoe.git && cd tiktaktoe
yarn playback
```

![https://i.imgur.com/mUfI6cR.png](https://i.imgur.com/mUfI6cR.png)


### Creating new AI

Participants can create a javascript class which must implement the following two function:

```js
/*
 * symbol = 'X' or 'O'
 * step = 1, 2, 3...9
 * board = [ [" ", " ", " "]
 *           [" ", " ", " "]
 *           [" ", " ", " "] ]
 *   The first index of board accesses the row (y value)
 *   The second index accesses the col (x value)
 */
decide(symbol, step, board) {
  let xpos = ...x position logic...
  let ypos = ...y position logic...
  let getboardpos = board[ypos][xpos]
  if ( getboardpos == ' ' )
  return [xpos, ypos]
}
```

The engine will tell the player which symbol they are, what step they are on, and show them the current state of the board. Players can use this information to determine the next position to pick. When the opponent player makes a decision `decide` will be called again. This repeats until no positions are avaliable or one of the players have created a straight line. 

```js
name() { 
  return "My Name"
}
```

This function is used to identify the AI for formatting purposes.

#### Example

This is the example AI class provided with the engine. 

```js
class RandomAI {
    // Called when engine wants AI to make a decision
    decide(symbol, step, board) {
        // Keep looping until the next empty position is found
        while(true) {
            // Random (x, y) value
            let x = Math.floor(Math.random()*3)
            let y = Math.floor(Math.random()*3)
            // if the position is ' ', empty
            let chr = board[y][x]
            if ( chr === " " )
                return [x, y] // return [xposition, yposition]
        }
    }
    name() {
        return "RandomAI" // my name
    }
}

module.exports = RandomAI
```

### Testing 

Testing is as easy as writing a script and the engine each player uses is the same that is used during the live game. 

```js
const ttt  = require('tiktaktoe')
const myai = require('./index.js')
let game_as_x = ttt.game.run(new myai(), ttt.game.testai())
let game_as_y = ttt.game.run(ttt.game.testai(), new myai())
ttt.format.recap(game_as_x)
ttt.format.recap(game_as_y)
```




