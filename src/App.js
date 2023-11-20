import React, { useState, useEffect } from 'react';
import './App.css';

const PUZZLE_SIZE = 3;

function App() {
  const [puzzle, setPuzzle] = useState([]);
  const [isGameWon, setIsGameWon] = useState(false);

  useEffect(() => {
    initializePuzzle();
  }, []);

  useEffect(() => {
    if (isGameWon) {
      alert('Congratulations! You solved the puzzle!');
    }
  }, [isGameWon]);

  const initializePuzzle = () => {
    const initialPuzzle = Array.from({ length: PUZZLE_SIZE * PUZZLE_SIZE }, (_, index) => index + 1);
    initialPuzzle[initialPuzzle.length - 1] = null;
    setPuzzle(shuffleArray(initialPuzzle));
  };

  const shuffleArray = (array) => {
    const shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    return shuffledArray;
  };

  const handleTileClick = (index) => {
    if (!isGameWon) {
      const puzzleCopy = [...puzzle];
      const emptyTileIndex = puzzleCopy.indexOf(null);
      if (isMoveValid(index, emptyTileIndex)) {
        [puzzleCopy[index], puzzleCopy[emptyTileIndex]] = [puzzleCopy[emptyTileIndex], puzzleCopy[index]];
        setPuzzle(puzzleCopy);
        checkWin(puzzleCopy);
      }
    }
  };

  const isMoveValid = (tileIndex, emptyTileIndex) => {
    const rowDiff = Math.abs(Math.floor(tileIndex / PUZZLE_SIZE) - Math.floor(emptyTileIndex / PUZZLE_SIZE));
    const colDiff = Math.abs((tileIndex % PUZZLE_SIZE) - (emptyTileIndex % PUZZLE_SIZE));
    return (rowDiff === 1 && colDiff === 0) || (colDiff === 1 && rowDiff === 0);
  };

  const checkWin = (currentPuzzle) => {
    const sortedPuzzle = [...currentPuzzle].sort((a, b) => a - b);
    if (JSON.stringify(currentPuzzle) === JSON.stringify(sortedPuzzle)) {
      setIsGameWon(true);
    }
  };

  return (
    <div className="App">
      <h1>Sliding Puzzle Game</h1>
      <div className="Puzzle" style={{ justifyContent: "center" }}>
        {puzzle.map((tile, index) => (
          <div
            key={index}
            style={{ height: "80px", width: "80px" }}
            className={`Tile ${tile === null ? 'EmptyTile' : ''}`}
            onClick={() => handleTileClick(index)}
          >
            {tile}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
