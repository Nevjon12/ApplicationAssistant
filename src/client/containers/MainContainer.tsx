import ApplicationContainer from "./ApplicationContainer";
import InputContainer from "./InputContainer";
import NavBar from "../components/NavBar";
import { useState } from "react";



export default function MainContainer(){

    const [cards, setCards] = useState([]);


  return(

    <>
      <NavBar></NavBar>
      <div className="main">
        <h1>Application Tracker</h1>
        <>
        <InputContainer data={cards} setCards={setCards} />

        <ApplicationContainer data={cards} setCards={setCards}/>
        </>
        <textarea className="notes" defaultValue={'Notes go here'}> 
        </textarea>
      </div>
    </>
  )


}