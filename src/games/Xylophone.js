import { useEffect, useState } from 'react';
import notes from './assets/notes.js';
import './xylophone.scss';

function Xylophone() {

   const [playedNotes,setPlayedNotes] = useState([])
  const onReplay = () => {
     playedNotes.map ((note,idx) =>
      
     setTimeout(()=> {    
        console.log(note);
        new Audio(note.file).play()
    }, 500*idx)
     )
  } 

  const colors = [
'#2596be',
'#40a4d8',
'#a564da',
'#b4c424',
'#fecc2f',
'#fbb72c',
'#f47424',
'#dc3b3b'  ]





  return (
    <div className="container-page">
      <h1>xylophone game</h1>
      <div className="xylophone">
        {/* I am placeholder buttons, please create me using a map, and with your own component */}
        {notes.map((note, idx) => {
                    return (
                        <button key={idx}
                        className='note-button' 
                        
                        style={{height: 250 - (15*idx) + 'px', backgroundColor: colors[idx]}}
                        onClick={() =>{
                         setPlayedNotes([...playedNotes, note])   
                         new Audio(note.file).play()}
                         
                        }>
                        {note.name}</button>

                    )
                })}        

      </div>

      <div className='played-notes'>

      {playedNotes.map((note) => {
        return note.name+" "
      })}

      </div>

      <button className='game-buttons' onClick={() =>onReplay()}>Replay</button> 
      <button className='game-buttons' onClick={()=> setPlayedNotes([])}>Clear</button>
    </div>
  );
}

export default Xylophone;




