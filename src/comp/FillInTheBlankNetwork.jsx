import React, { useState } from "react";

const FillInTheBlankNetwork = () => {
  const questions = [
    {
      id: 1,
      text: "1. The device that connects multiple networks and operates at Layer 3 is called a ______.",
      answer: "router"
    },
    {
      id: 2,
      text: "2. The protocol used to resolve IP addresses to MAC addresses is ______.",
      answer: "arp"
    },
    {
      id: 3,
      text: "3. The default mask of a Class C network is ______.",
      answer: "255.255.255.0"
    },
    {
      id: 4,
      text: "4. The OSI layer responsible for end-to-end communication is the ______ layer.",
      answer: "transport"
    }
  ];

  const [responses, setResponses] = useState({});
  const [result, setResult] = useState("");

  const handleChange = (id, value) => {
    setResponses({ ...responses, [id]: value });
  };

  const handleSubmit = () => {
    for (let q of questions) {
      const userAnswer = (responses[q.id] || "").trim().toLowerCase();

      if (userAnswer !== q.answer.toLowerCase()) {
        setResult(`❌ Incorrect answer for Question ${q.id}. Try again.`);
        return;
      }
    }

    setResult("✅ All answers are correct!");
  };

  return (
    <div style={{ width: "500px", margin: "20px auto", fontFamily: "Arial" }}>
      <h2>Network Basics – Fill in the Blanks</h2>

      {questions.map((q) => (
        <div key={q.id} style={{ marginBottom: "20px" }}>
          <p>{q.text}</p>
          <input
            type="text"
            placeholder="Your answer"
            value={responses[q.id] || ""}
            onChange={(e) => handleChange(q.id, e.target.value)}
            style={{
              padding: "8px",
              width: "100%",
              borderRadius: "4px",
              border: "1px solid #ccc"
            }}
          />
        </div>
      ))}

      <button
        onClick={handleSubmit}
        style={{
          padding: "10px 20px",
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
        <p style={{ marginTop: "20px", fontWeight: "bold" }}>{result}</p>
      )}
    </div>
  );
};

export default FillInTheBlankNetwork;
