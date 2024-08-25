import { useState } from 'react'
import EditNameButton from './EditNameButton'
export default function Player({ name, symbol }) {
    const[isEditing, setIsEditing] = useState(false)
    
    function editPlayerName(){
      setIsEditing(true)
    }


   

  return (
 
    <li>
      <span className="player">
        <EditNameButton name={name} setInput={isEditing}/>
        <span className="player-symbol">{symbol}</span>
        <button onClick={editPlayerName} >edit</button>
       
        
        
   
      </span>
      
    </li>
 
  )
}
