import React, { useState } from "react";

const PingSimulator = () => {
  const [result, setResult] = useState("");

  const handlePing = (type) => {
    switch (type) {
      case "unreachable":
        setResult("Destination Host Unreachable.");
        break;
      case "timeout":
        setResult("Request timed out.");
        break;
      case "wrongReply":
        setResult("Reply from 192.168.1.1: bytes=32 time=50ms TTL=64 (Not the destination IP)");
        break;
      case "ttlExpired":
        setResult("TTL expired in transit.");
        break;
      default:
        setResult("");
    }
  };

  return (
    <div style={{ fontFamily: "Arial", padding: "20px", maxWidth: "500px", margin: "0 auto" }}>
      <h2>Ping Error Simulator</h2>
      <div style={{ marginBottom: "10px" }}>
        <button onClick={() => handlePing("unreachable")} style={{ marginRight: "10px" }}>
          Destination Host Unreachable
        </button>
        <button onClick={() => handlePing("timeout")} style={{ marginRight: "10px" }}>
          Request Timed Out
        </button>
        <button onClick={() => handlePing("wrongReply")} style={{ marginRight: "10px" }}>
          Reply from Wrong IP
        </button>
        <button onClick={() => handlePing("ttlExpired")}>
          TTL Expired
        </button>
      </div>
      <div
        style={{
          padding: "10px",
          backgroundColor: "#f0f0f0",
          border: "1px solid #ccc",
          borderRadius: "5px",
          whiteSpace: "pre-wrap",
        }}
      >
        {result}
      </div>
    </div>
  );
};

export default PingSimulator;
