import React from "react";

export default props => {
  return (
    <div>
      {props.len > 5 ? (
        <p>the length of text is enough</p>
      ) : (
        <p>the text is short</p>
      )}
    </div>
  );
};
