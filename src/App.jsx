import { useState } from "react"
import Player from "./Components/Player"
import GameBoard from "./Components/GameBoard"
function App() {
 const [activePlayer, setActivePlayer] = useState('X')

 function handleSelectedSquare(){
    setActivePlayer((currentActivePlayer)=>currentActivePlayer == 'X' ? 'O':'X')
 }
   
  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player initialName="player 1" symbol="X" isActive={activePlayer == 'X'}/>
          <Player initialName="Player 2" symbol="O" isActive={activePlayer == 'O'}/>
        </ol>
        <GameBoard onSelectSquare={handleSelectedSquare} activePlayerSymbolProp={activePlayer}/> 
      </div>
    </main>
  )
}

export default App
