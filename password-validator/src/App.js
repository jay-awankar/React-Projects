import "./App.css";
import React, { useState } from "react";
import validator from "validator";

function App() {
  const [message, setMessage] = useState("");

  const validate = (value) => {
    if (
      validator.isStrongPassword(value, {
        minLength: 8,
        minLowercase: 1,
        minUppercase: 1,
        minNumber: 1,
        minSymbols: 1,
      })
    ) {
      setMessage("Strong Password");
    } else {
      setMessage("Not a Strong Password");
    }
  };

  return (
    <div className="App">
      <h1>PASSWORD VALIDATOR</h1>
      <h2>Check your password strength</h2>
      <input
        className="inputBox"
        type="text"
        onChange={(e) => validate(e.target.value)}
      ></input>
      {message === " " ? null : (
        <p
          className="result"
          style={{
            color: message === "Not a Strong Password" ? "red" : "green",
          }}
        >
          {message}
        </p>
      )}
    </div>
  );
}

export default App;
