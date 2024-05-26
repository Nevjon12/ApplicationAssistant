export default function AppCard(props){
    console.log(props)


  const handleDelete = async()=>{

    await fetch(`/api/${props.cards._id}`, {
      method: 'DELETE'
    })

  };

  return(

    <div className="appcard">
      Company: {props.cards.companyName}
      <br />
      Role: {props.cards.position}
      <br />
      <button> Notes </button>
      <button onClick={handleDelete}> Delete </button>
      
      
    </div>
    
  )


}