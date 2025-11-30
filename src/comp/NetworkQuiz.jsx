import React, { useState } from "react";

const NetworkQuiz = () => {
  const question = {
    text: "Which device operates at Layer 2 of the OSI model?",
    options: [
      "Router",
      "Switch",
      "Firewall",
      "Repeater"
    ],
    correct: "Switch"
  };

  const [selected, setSelected] = useState("");
  const [result, setResult] = useState("");

  const submitAnswer = () => {
    if (selected === "") {
      setResult("Please choose an answer.");
      return;
    }

    if (selected === question.correct) {
      setResult("✅ Correct! A switch is a Layer 2 device.");
    } else {
      setResult("❌ Incorrect. The correct answer is: " + question.correct);
    }
  };

  return (
    <div style={{ width: "400px", margin: "20px auto", fontFamily: "Arial" }}>
      <h2>Network Basics Quiz</h2>

      <p><strong>Question:</strong> {question.text}</p>

      {question.options.map((option) => (
        <div key={option}>
          <input
            type="radio"
            id={option}
            name="networkQuestion"
            value={option}
            onChange={(e) => setSelected(e.target.value)}
          />
          <label htmlFor={option} style={{ marginLeft: "8px" }}>
            {option}
          </label>
        </div>
      ))}

      <button
        onClick={submitAnswer}
        style={{
          marginTop: "15px",
          padding: "8px 16px",
          backgroundColor: "#007bff",
          color: "white",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer"
        }}
      >
        Submit
      </button>

      {result && (
        <p style={{ marginTop: "15px", fontWeight: "bold" }}>{result}</p>
      )}
    </div>
  );
};

export default NetworkQuiz;
