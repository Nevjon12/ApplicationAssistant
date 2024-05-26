import { useEffect } from "react"


export default function Notes(props){

  useEffect(()=>{

    //Render the text related to the specific card selected

  }, [props.currentCard])


return (
  <form className="notes">

  <textarea style={{width:'100%', boxSizing:'border-box', height:'90%'}} defaultValue={'Notes go here'} /> 
  <button type="submit" >Add Note</button>
  </form>

)

}