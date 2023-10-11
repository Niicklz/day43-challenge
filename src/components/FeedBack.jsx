import React from "react";
import "./FeedBack.css";

export const FeedBack = ({
  type,
  currentFeedBackSelected,
  handleChangeFocus,
}) => {
  return (
    <div className={`feedback-container ${currentFeedBackSelected === type? "active": ""} `}onClick={()=> handleChangeFocus(type)}>
      <img src={`/public/${type}.png`} alt="" className="facetype" />
      <p className="type">{type}</p>
    </div>
  );
};
