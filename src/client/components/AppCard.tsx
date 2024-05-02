

export default function AppCard({cards}){

  //Check the application response data to render the applications saved in the database 
  

  return(

    <div className="appcard">
      Company: {cards.companyName}
      <br />
      Role: {cards.position}
      <br />
      ID: {cards._id}

    </div>
    
  )


}