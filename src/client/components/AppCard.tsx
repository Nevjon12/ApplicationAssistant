export default function AppCard({cards}){

  const deleteAppCard = ()=>{
    console.log('deleting')
    fetch('/api', {
      method: 'DELETE'
    })
    .then(()=>{console.log('Deleted')})
  }


  

  return(

    <div className="appcard">
      Company: {cards.companyName}
      <br />
      Role: {cards.position}
      <br />
      ID: {cards._id}
      <br />
      <button onClick={deleteAppCard}>Delete</button>
    </div>
    
  )


}