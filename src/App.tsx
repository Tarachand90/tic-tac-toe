import { useState } from "react";
import GameBoard from "./components/GameBoard";
import Player from "./components/Player";
import { PlayerSymbol } from "./components/PlayerSymbol";

function App() {
  //It maintains the activePlayer state, which can be "X" or "O" (depending on whose turn it is).
  const [activePlayer, setActivePlayer] = useState<PlayerSymbol>("X");

  // When a square is clicked, this handler toggles the active player between "X" and "O".
  const handleSelectSquare = () => {
    setActivePlayer((currentActivePlayer) =>
      currentActivePlayer === "X" ? "O" : "X"
    );
  };
  return (
    <main>
      <div id="game-container">
        {/* PLAYER BUILDING BLOCK */}
        <ol id="players" className="highlight-player">
          //Two Player components are rendered to display Player 1 and Player 2
          with their respective symbols.
          <Player name="Player 1" symbol="X" isActive={activePlayer === "X"} />
          <Player name="Player 2" symbol="O" isActive={activePlayer === "O"} />
        </ol>
        {/* GAME BOARD BUILDING BLOCK */}
        //The GameBoard component is passed the current activePlayer and the
        handler to change turns.
        <GameBoard
          onSelectSquare={handleSelectSquare}
          activePlayerSymbol={activePlayer}
        />
      </div>
      {/* LOG */}
    </main>
  );
}

export default App;
