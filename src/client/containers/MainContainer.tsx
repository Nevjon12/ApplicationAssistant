import ApplicationContainer from "./CardContainer";
import InputContainer from "./InputContainer";
import NavBar from "../components/NavBar";



export default function MainContainer(){

  return(

    <>
      <NavBar></NavBar>
      <div className="main">
        <h1>Application Tracker</h1>
        <>
        <InputContainer/>

        <ApplicationContainer/>
        </>
        <textarea className="notes"> 
          Notes would go here
        </textarea>
      </div>
    </>
  )


}