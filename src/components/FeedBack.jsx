import React from "react";
import "./FeedBack.css";
import Neutral from "/public/Neutral.png"
import Satisfied from "/public/Satisfied.png"
import unHappy from "/public/UnHappy.png"

export const FeedBack = ({
    img,
  type,
  currentFeedBackSelected,
  handleChangeFocus,
}) => {
  return (
    <div className={`feedback-container ${currentFeedBackSelected === type? "active": ""} `}onClick={()=> handleChangeFocus(type)}>
      <img src={img} alt="" className="facetype" />
      <p className="type">{type}</p>
    </div>
  );
};
