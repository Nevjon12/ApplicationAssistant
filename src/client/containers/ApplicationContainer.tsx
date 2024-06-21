import ApplicationCards from "../components/AppCard";
import { useState } from "react";

export default function ApplicationContainer(props){

  const [state, setState] = useState(() => {
    // Attempt to fetch the stored data using a key when the component initializes
    const storedData = localStorage.getItem('formData');
    // If data exists, parse and return it, otherwise return an initial value (e.g., empty array)
    return storedData ? JSON.parse(storedData) : [];
  });


  return(

      <div className="apps">
        <h1>Applications</h1>
        <div className="cards">
        {
          state.map((card, index) => {
            return <ApplicationCards
              id={index}
              state={state} 
              setState={setState} 
              key={index} 
              cards={card} 
              setCurrentCard={props.setCurrentCard} 
              currentCard={props.currentCard}/>;
          })
        }
        </div>
      </div>
  )


}