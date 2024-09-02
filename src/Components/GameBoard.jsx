import { useState } from "react"


const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
]
export default function GameBoard({onSelectSquare, activePlayerSymbolProp}) {
    const [gameBoard, setGameBoard] = useState(initialGameBoard); 

    // creating states/objects and updating them in an immutable way. 
    function handleSelectSquare(rowIndex, colIndex){
        setGameBoard((prevGameBoard)=>{
            const updatedBoard = [...prevGameBoard.map(innerArray=>[...innerArray])]; 
            updatedBoard[rowIndex][colIndex]  = activePlayerSymbolProp; 
            return updatedBoard; 
        }); 

        onSelectSquare(); 
    }
  return (
  <ol id="game-board">
    {gameBoard.map((row, rowIndex) => (
      <li key={rowIndex}>
        <ol>
          {row.map((playerSymbol, colIndex) => (
            <li key={colIndex}>
              <button onClick={()=>handleSelectSquare(rowIndex, colIndex)}>{playerSymbol}</button>
            </li>
          ))}
        </ol>
      </li>
    ))}
  </ol>
  )
}
