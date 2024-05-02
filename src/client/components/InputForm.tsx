import { useState } from "react";

export default function InputForm(){

  const [formValues, setFormValues] = useState({
    position: '',
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
    });
  };


  return(

    <div className="inputcontainer">
      <form   onSubmit={handleSubmit}>
        <input type="text" name='position' placeholder={'Position'} className="input" value={formValues.position} onChange={handleChange}></input>
        <input  type="text" name='companyName' placeholder={'Company Name'} className="input" value={formValues.companyName} onChange={handleChange}></input>
        <input  type="text" defaultValue={new Date().toLocaleDateString()} className="input"></input>
        <br />
        <input type="submit" value='Add to list'/>
      </form>
    </div>

  )


}