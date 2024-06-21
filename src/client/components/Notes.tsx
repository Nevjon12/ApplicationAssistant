import { useState } from "react"


export default function Notes(props){



  const [noteContent, setNoteContent] = useState()

  const onChange = (event)=>{
    
    event.target.value = event.target.value;
    setNoteContent(event.target.value)
  
  }

    
  const currentNote = props.current;
  console.log('Currentnote', currentNote)
 



  const saveNote = (event) => {
    event.preventDefault()
    
    const formData = JSON.parse(localStorage.getItem('formData'));
    console.log('Save Note', formData[props.current].companyName)

  }

  

return (
  <form className="notes">

  <textarea name='notetext' style={{width:'100%', boxSizing:'border-box', height:'90%'}} value={`${currentNote}` || 'Nothing selected yet'} onChange={onChange}  /> 
  <button type='submit' onClick={saveNote}>Save Note</button>
  </form>

)

}