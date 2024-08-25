 export default function EditNameButton({name, setInput}){
    console.log(setInput);
    let editName=<span className="player-name">{name}</span>

    if(setInput){
        editName=<input className="player-input"></input>
    }

    return(
        <>
         {editName}
        </>
    )
 }