import ApplicationCards from "../components/AppCard";
import { useEffect, useState } from "react";

export default function ApplicationContainer(props){

  const [isLoading, setIsLoading] = useState(true);
  const state = props.data;
  const setState = props.setCards;


  useEffect(() => { 
    fetch('/api')
      .then((data) => {
        return data.json()
      })
      .then(json => {
        setState(json.data);
        setIsLoading(false)
      })
  },[]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return(

      <div className="apps">
        <h1>Applications</h1>
        <div className="cards">
        {
          state.map((card, index) => {
            return <ApplicationCards state={state} setState={setState} key={index} cards={card} setCurrentCard={props.setCurrentCard} currentCard={props.currentCard}/>;
          })
        }
        </div>
      </div>
  )


}