import React, { useState } from "react";

const Clock = () => {
  const [time, settime] = useState(new Date().toLocaleTimeString());

  const timeFunc = () => {
    const updatedTime = new Date().toLocaleTimeString();
    settime(updatedTime);
    // console.log(time);
  };

  setInterval(timeFunc, 1000);

  return (
    <div>
      <p style={{ fontSize: "20px" }}>
        <strong>{time}</strong>
      </p>
    </div>
  );
};

export default Clock;
