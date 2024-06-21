import ApplicationContainer from "./ApplicationContainer";
import InputContainer from "./InputContainer";
import NavBar from "../components/NavBar";
import { useEffect, useState } from "react";
import Notes from "../components/Notes";



export default function MainContainer(){

    const [cards, setCards] = useState([]);
    const [currentCard, setCurrentCard] = useState()

    console.log('current Card State', currentCard);
  

    useEffect(()=>{

      const cardsInLocalStorageString = localStorage.getItem('formData');
      const cardsInLocalStorage = cardsInLocalStorageString ? JSON.parse(cardsInLocalStorageString) : [];

      setCards(cardsInLocalStorage);

    }, [])



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