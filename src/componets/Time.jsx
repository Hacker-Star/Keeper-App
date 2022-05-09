import React, { useState } from "react";

function Time() {
  setInterval(upDateTime, 1000);
  let now = new Date().toLocaleTimeString();

  const [time, setTime] = useState(now);

  function upDateTime() {
    let newTime = new Date().toLocaleTimeString();
    setTime(newTime);
  }
  return <h1>{time}</h1>;
}

export default Time;
