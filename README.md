# Sliding Puzzle

A sliding-tile puzzle game built with React. The board starts shuffled; click a tile next to the empty space to slide it, and put the numbers back in order to win.

## Features

- **Configurable board size:** the `PUZZLE_SIZE` constant sets the grid (3×3 by default)
- **Move validation:** only tiles directly above, below, left or right of the empty space can move
- **Win detection:** after every move, `checkWin` compares the board with the solved order and shows a message when the puzzle is complete

## Tech

React (Create React App), JavaScript, CSS

## Run it locally

```bash
git clone https://github.com/GabrielleGP/puzzle.git
cd puzzle
npm install
npm start
```

Then open http://localhost:3000.
