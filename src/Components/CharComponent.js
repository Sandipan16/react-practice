import React from "react";
import "../styles.css";

export default props => {
  return (
    <div className="CharNote" onClick={props.clicked}>
      <p>{props.value}</p>
    </div>
  );
};
