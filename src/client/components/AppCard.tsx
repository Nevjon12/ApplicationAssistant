export default function AppCard(props){


  const handleDelete = async()=>{

    await fetch(`/api/${props.cards._id}`, {
      method: 'DELETE'
    })

  };

  const handleClick = ()=>{

    props.setCurrentCard(props.cards._id)


  }
  return(

    <div className="appcard" onClick={handleClick}>
      Company: {props.cards.companyName}
      <br />
      Role: {props.cards.position}
      <br />
      <button onClick={handleDelete}> Delete </button>
      
      
    </div>
    
  )


}