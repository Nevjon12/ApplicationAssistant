import ApplicationCards from "../components/AppCard";
import { useEffect, useState } from "react";

export default function ApplicationContainer(){

  const [cards, setCards] = useState()
  const [isLoading, setIsLoading] = useState(true);
  
  // The code snippet below is a possible alternative way to approach setting state, test later
  // async function getAllCards() {

  //   const response = await fetch('/api');
  //   const allCards = await response.json();
  //   console.log(allCards)

  // }
 


  useEffect(() => { 
    fetch('/api')
      .then((data) => {
        return data.json()
      })
      .then(json => {
        setCards(json.data);
        setIsLoading(false)
      })
    },[]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return(
    <>
      <h1>Applications</h1>
      <div className="apps">
        
        {
          cards.map((card, index) => {
            return <ApplicationCards key={index} cards={card} />;
          })
        }

      </div>
    </>
  )


}