import { useState } from "react";
import { PlayerSymbol } from "./PlayerSymbol";

interface GameBoardProps {
  onSelectSquare: () => void; //A callback function to switch the active player.
  activePlayerSymbol: PlayerSymbol;
}

const initialGameBoard: PlayerSymbol[][] = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

const GameBoard = ({ onSelectSquare, activePlayerSymbol }: GameBoardProps) => {
  const [gameBoard, setGameBoard] =
    useState<PlayerSymbol[][]>(initialGameBoard);

  // Prevents overwriting an already-filled square.
  // Updates the board with the symbol of the active player.
  // Calls onSelectSquare to switch the active player.

  const handleSelectedSquare = (rowIndex: number, colIndex: number) => {
    setGameBoard((prevGameBoard) => {
      if (prevGameBoard[rowIndex][colIndex] !== null) return prevGameBoard; // Prevent overwriting
      return prevGameBoard.map((row, r) =>
        row.map((cell, c) =>
          r === rowIndex && c === colIndex ? activePlayerSymbol : cell
        )
      );
    });
    onSelectSquare();
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
