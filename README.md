
# Tic Tak Toe

Game engine for playing tic-tak-toe with AI 

I'm aware I spelled tic-tac-toe wrong. 

## Usage

You need to create your own class which implements the following two functions:

### `decide(symbol, step, board)`

* `symbol`: contains either `"X"` or `"O"`.
* `step`: which tick the engine needs a decision for
* `board`: A 2D array which contains the current state of the board

This function is called by the engine to figure out on which position of the map should the symbol be set. The developer needs to read `board` to determine what their next move is. 

### `name()`

This function returns the name of the AI that is playing

## Example

Below is an example of `index.js` which exports your robot class.

```js
class MyTTTPlayer {
    decide(symbol, step, board) {
        console.log("Symbol: ", symbol) // "X"
        console.log("Step:   ", step)   // 1
        console.log("Board:  ", board) 
        // [[" ", " ", " "],
        //  [" ", " ", " "],
        //  [" ", " ", " "]]
        return [0,0]
    }
    name() {
        return "My Tic-Tak-Toe Player"
    }
}

module.exports = MyTTTPlayer
```

## Rules

1. First robot which places three of their symbols in a line wins.
2. If the robots return an invalid position than the game is over


