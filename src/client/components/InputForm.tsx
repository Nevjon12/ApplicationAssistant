import { useState } from "react";

export default function InputForm(props){


  const state = props.state.data
  const updateState = props.state.setCards;


  const [formValues, setFormValues] = useState({
    position: 
    '',
    companyName: '',
    date: new Date().toLocaleDateString(),
  });


  const handleChange = (event) => {
    setFormValues({
      ...formValues,
      [event.target.name]: event.target.value,
    });
  };


  


  const handleSubmit = (event) => {
    event.preventDefault();
    fetch('/api', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formValues),
    })
    .then(response => response.json())
    .then(data => console.log(data))
    ;
    const newState = [
    ...state, 
    formValues
    ];
    updateState(newState);

    setFormValues({
      position: '',
      companyName: '',
      date: new Date().toLocaleDateString(),
      });

  };





  return(

    <div className="inputcontainer">
      <form  style={{
        display:'flex',
        justifyContent: "center",
        alignItems: 'center',
        flexDirection: 'column',
        paddingBottom: '10px'
      }} onSubmit={handleSubmit}>
        <input minLength={3} type="text" name='position' placeholder={'Position'} className="input" value={formValues.position} onChange={handleChange}></input>
        <input  minLength={3} type="text" name='companyName' placeholder={'Company Name'} className="input" value={formValues.companyName} onChange={handleChange}></input>
        <input  type="text" defaultValue={new Date().toLocaleDateString()} className="input"></input>
        <br />
        <input type="submit" value='Add to list'/>
      </form>
    </div>

  )


}