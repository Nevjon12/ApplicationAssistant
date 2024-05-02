import ApplicationContainer from "./CardContainer";
import InputContainer from "./InputContainer";




export default function MainContainer(){

  return(

    <div className="main">
      <h1>Application Tracker</h1>
      <br/>
      <InputContainer/>
      <br/>
      <ApplicationContainer/>

    </div>

  )


}