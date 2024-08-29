import Player from "./Components/Player"

function App() {
  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <Player initialName="player 1" symbol="X" />
          <Player initialName="Player 2" symbol="O" />
        </ol>
        GAMEBOARD
      </div>
    </main>
  )
}

export default App
