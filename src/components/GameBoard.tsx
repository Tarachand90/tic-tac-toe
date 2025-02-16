import { useState } from "react";

type PlayerSymbol = null | "X" | "O";

const initialGameBoard: PlayerSymbol[][] = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

const GameBoard = () => {
  const [gameBoard, setGameBoard] =
    useState<PlayerSymbol[][]>(initialGameBoard);

  const handleSelectedSquare = (rowIndex: number, colIndex: number) => {
    setGameBoard((prevGameBoard) => {
      if (prevGameBoard[rowIndex][colIndex] !== null) return prevGameBoard; // Prevent overwriting
      return prevGameBoard.map((row, r) =>
        row.map((cell, c) => (r === rowIndex && c === colIndex ? "X" : cell))
      );
    });
  };

  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button
                  onClick={() => handleSelectedSquare(rowIndex, colIndex)}
                >
                  {playerSymbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
};

export default GameBoard;
