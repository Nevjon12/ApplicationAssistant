import ApplicationContainer from "./ApplicationContainer";
import InputContainer from "./InputContainer";
import NavBar from "../components/NavBar";
import { useState } from "react";
import Notes from "../components/Notes";



export default function MainContainer(){

    const [cards, setCards] = useState([]);
    const [currentCard, setCurrentCard] = useState(0)
    console.log(currentCard)
  return(

    <>
      <NavBar></NavBar>
      <div className="main">
        <h1>Application Tracker</h1>
        <>
        <InputContainer data={cards} setCards={setCards} />

        <ApplicationContainer data={cards} setCards={setCards} setCurrentCard={setCurrentCard} currentCard={currentCard}/>
        </>
        <Notes data={cards} current={currentCard} />
      </div>
    </>
  )


}