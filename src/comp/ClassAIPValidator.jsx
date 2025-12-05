import React, { useState } from "react";

const ClassAIPValidator = () => {
  const [ip, setIp] = useState("");
  const [message, setMessage] = useState("");

  const validateClassAIP = (ip) => {
    const octets = ip.split(".");
    if (octets.length !== 4) {
      return "Invalid IP: Must have 4 octets.";
    }

    const [first, second, third, fourth] = octets.map(Number);

    if (
      isNaN(first) ||
      isNaN(second) ||
      isNaN(third) ||
      isNaN(fourth)
    ) {
      return "Invalid IP: All octets must be numbers.";
    }

    if (first < 1 || first > 126) {
      return "Invalid Class A IP: First octet must be 1-126.";
    }

    if (
      second < 0 || second > 255 ||
      third < 0 || third > 255 ||
      fourth < 0 || fourth > 255
    ) {
      return "Invalid IP: Octets 2-4 must be 0-255.";
    }

    return "Valid Class A IP!";
  };

  const handleValidate = () => {
    const result = validateClassAIP(ip.trim());
    setMessage(result);
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial", maxWidth: "400px", margin: "0 auto" }}>
      <h2>Class A IP Validator</h2>
      <input
        type="text"
        value={ip}
        placeholder="Enter Class A IP (e.g., 10.0.0.1)"
        onChange={(e) => setIp(e.target.value)}
        style={{
          width: "100%",
          padding: "8px",
          marginBottom: "10px",
          borderRadius: "4px",
          border: "1px solid #ccc"
        }}
      />
      <button
        onClick={handleValidate}
        style={{
          padding: "8px 16px",
          cursor: "pointer",
          borderRadius: "4px",
          border: "none",
          backgroundColor: "#007acc",
          color: "white"
        }}
      >
        Validate
      </button>
      {message && (
        <div
          style={{
            marginTop: "15px",
            padding: "10px",
            borderRadius: "4px",
            backgroundColor: message.includes("Valid") ? "#d4edda" : "#f8d7da",
            color: message.includes("Valid") ? "#155724" : "#721c24"
          }}
        >
          {message}
        </div>
      )}
    </div>
  );
};

export default ClassAIPValidator;
