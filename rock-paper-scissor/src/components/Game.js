import React, { useState } from "react";
import "./Game.css";

function Game() {
  const [playerValue, setPlayerValue] = useState("");
  const [compValue, setCompValue] = useState("");
  const [playerScore, setPlayerScore] = useState(0);
  const [compScore, setCompScore] = useState(0);
  const [winner, setWinner] = useState("");

  const handleReset = () => {
    setPlayerValue("");
    setCompValue("");
    setPlayerScore(0);
    setCompScore(0);
    setWinner("");
  };

  const decision = (playerChoice) => {
    const choices = ["ROCK", "PAPER", "SCISSOR"];
    const compChoice = choices[Math.floor(Math.random() * choices.length)];

    if (playerScore === 10) {
      return setWinner("You Win");
    } else if (compScore === 10) {
      return setWinner("Computer Win");
    }

    const logic = (playerChoice, compChoice) => {
      if (playerChoice === compChoice) {
        setPlayerValue(playerChoice);
        setCompValue(compChoice);
      } else if (
        (playerChoice === "ROCK" && compChoice === "SCISSOR") ||
        (playerChoice === "SCISSOR" && compChoice === "PAPER") ||
        (playerChoice === "PAPER" && compChoice === "ROCK")
      ) {
        setPlayerValue(playerChoice);
        setCompValue(compChoice);
        setPlayerScore(playerScore + 1);
      } else {
        setPlayerValue(playerChoice);
        setCompValue(compChoice);
        setCompScore(compScore + 1);
      }
    };
    logic(playerChoice, compChoice);
  };

  return (
    <div className="container">
      <h1>ROCK PAPER SCISSOR GAME</h1>
      <h3>Select your choice</h3>
      <div className="choices">
        <button onClick={() => decision("ROCK")}>
          <i class="fa-solid fa-hand-fist"></i>
        </button>
        <button onClick={() => decision("PAPER")}>
          <i class="fa-solid fa-hand"></i>
        </button>
        <button onClick={() => decision("SCISSOR")}>
          <i class="fa-solid fa-hand-scissors fa-rotate-90"></i>
        </button>
      </div>

      <p>Your Choice: {playerValue}</p>
      <p>Computer Choice: {compValue}</p>
      <h3>Your Score: {playerScore}</h3>
      <h3>Computer Score: {compScore}</h3>
      <h2 style={{ color: winner === "You Win" ? "green" : "red" }}>
        {winner}
      </h2>

      <button className="resetbtn" type="reset" onClick={handleReset}>
        Play Again
      </button>
    </div>
  );
}

export default Game;
