import { useState } from "react"


export default function Notes(props){

  const [noteContent, setNoteContent] = useState()

  const onChange = (event)=>{
    
    event.target.value = event.target.value;
    setNoteContent(event.target.value)
  
  }

    
  const currentNote = props.data.find(card => card._id === props.current) || 'nothing yet';
  console.log('current Note',currentNote)


  const handleClick = (event) => {
    event.preventDefault()
    console.log('current state',noteContent);

  }

  

return (
  <form className="notes">

  <textarea name='notetext' style={{width:'100%', boxSizing:'border-box', height:'90%'}} defaultValue={currentNote.position} onChange={onChange}  /> 
  <button type='submit' onClick={handleClick}>Save Note</button>
  </form>

)

}