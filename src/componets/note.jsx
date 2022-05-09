import React from "react";
import Time from "./Time";

function Note(props) {
  return (
    <div>
      <snote>
        <h1>{props.title}</h1>
        <note>
          <p>{props.content}</p>
        </note>
      </snote>
    </div>
  );
}

export default Note;
