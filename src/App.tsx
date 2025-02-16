import Player from "./components/Player";

function App() {
  return (
    <main>
      <div id="game-container">
        {/* PLAYER BUILDING BLOCK */}
        <ol id="players">
          <Player name="Player 1" symbol="X" />
          <Player name="Player 2" symbol="O" />
        </ol>
        {/* GAME BOARD BUILDING BLOCK */}
      </div>
      {/* LOG */}
    </main>
  );
}

export default App;
