import React, { useState } from "react";
import "./Quiz.css";
import qBank from "./QuetionBank";

const Quiz = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [currentQue, setCurrentque] = useState(0);
  const [quizEnd, setQuizEnd] = useState(false);
  const [score, setScore] = useState(0);

  const handleStart = () => {
    setQuizEnd(true);
  };

  const handleReset = () => {
    setCurrentque(0);
    setScore(0);
  };

  const handleNextQue = () => {
    if (currentQue < qBank.length) {
      setCurrentque(currentQue + 1);

      handleFormSubmit();
      setSelectedOption(null);
    }
  };

  const handleFormSubmit = () => {
    if (selectedOption === qBank[currentQue].answer) {
      setScore(score + 1);
      console.log(score);
    }
  };

  return (
    <div>
      <h1>QUIZ APP</h1>
      <div style={{ marginTop: "50px" }}>
        {quizEnd === false ? (
          <button className="startBtn" onClick={handleStart}>
            Start
          </button>
        ) : null}
      </div>

      <div>
        {currentQue < qBank.length && quizEnd === true ? (
          <div>
            <div className="container">
              <h2>Quetion {qBank[currentQue].id}</h2>
            </div>
            <p className="que">{qBank[currentQue].question}</p>

            <ul>
              {qBank[currentQue].options.map((option, index) => (
                <li
                  key={index}
                  onClick={() => setSelectedOption(option)}
                  className={selectedOption === option ? "selected" : ""}
                >
                  {option}
                </li>
              ))}
            </ul>

            <button
              className="submitBtn"
              disabled={selectedOption === null}
              style={{ cursor: selectedOption === null ? "not-allowed" : "" }}
              onClick={handleNextQue}
            >
              Submit and Next
            </button>
          </div>
        ) : (
          <div>
            {quizEnd === true ? (
              <div>
                <div className="container">
                  <h2>Quiz Completed!!!</h2>
                </div>
                <div>
                  <p style={{ fontSize: "40px" }}>Your Score : {score}</p>
                </div>
                <button className="startBtn" onClick={handleReset}>
                  Play Again
                </button>
              </div>
            ) : null}
          </div>
        )}
      </div>
    </div>
  );
};

export default Quiz;
