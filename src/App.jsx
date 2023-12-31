import React, { useEffect, useState } from "react";
import "./styles.css";
import { FeedBack } from "./components/FeedBack";
import hearth from "/public/hearth.gif"
import Neutral from "/public/Neutral.png"
import Satisfied from "/public/Satisfied.png"
import unHappy from "/public/UnHappy.png"

export const App = () => {
    const [currentFeedBackSelected, setCurrentFeedBackSelected] = useState("")
    const [feedbackSended, setFeedbackSended] = useState(false)
   

    const handleChangeFocus = (type)=> {
        setCurrentFeedBackSelected(type)
    }


    const handleClick = (e)=> {
       
       if(currentFeedBackSelected.length == 0){
        alert("Choose One Option!")
       }     
           
        
        if(currentFeedBackSelected.length !== 0 && e.target.className === "send") {
            setFeedbackSended(true) 
            return
        }
        if(e.target.className === "prev") {
            setCurrentFeedBackSelected("")
            setFeedbackSended(false)
        }
    }
   
  return (
    <div className="card">
        {!feedbackSended && <><h2>How satisfied are you with our customer support performance?</h2>
      <div className="card-feedback-container">
        <FeedBack img={unHappy} type="unHappy" currentFeedBackSelected={currentFeedBackSelected} handleChangeFocus={handleChangeFocus} />
        <FeedBack img={Neutral} type="Neutral" currentFeedBackSelected={currentFeedBackSelected} handleChangeFocus={handleChangeFocus} />
        <FeedBack  img={Satisfied} type="Satisfied" currentFeedBackSelected={currentFeedBackSelected} handleChangeFocus={handleChangeFocus} />
      </div>
      <button className="send" onClick={handleClick}>Send Review</button></> }
      {feedbackSended && <>
        <img className="hearth" src={hearth} alt="" />
        <p className="thanks">Thanks You!!</p>
        <p className="feedback-selected">Feedback: {currentFeedBackSelected}</p>
        <p className="description">We'll use your feedback to improve our customer support</p>
        <p className="wrong-selection">Did you make a mistake choosing feedback?</p>
        <button className="prev" onClick={handleClick} >Back</button>
      
      </>}
        
    </div>
  );
};
