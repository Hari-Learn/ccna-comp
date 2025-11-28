import React, { useState } from "react";

const HubBroadcastSimulator = () => {
  const [messages, setMessages] = useState([]);

  // simulate sending data from one PC
  const sendData = (pcName) => {
    const broadcastMsg = `💻 ${pcName} sent data -> Hub broadcasts to ALL PCs`;
    const pc1 = pcName !== "PC1" ? "PC1 RECEIVES broadcast" : "PC1 (sender)";
    const pc2 = pcName !== "PC2" ? "PC2 RECEIVES broadcast" : "PC2 (sender)";
    const pc3 = pcName !== "PC3" ? "PC3 RECEIVES broadcast" : "PC3 (sender)";

    setMessages([
      broadcastMsg,
      pc1,
      pc2,
      pc3,
      "-----------------------------",
      ...messages
    ]);
  };

  return (
    <div style={{
      width: "500px",
      margin: "20px auto",
      padding: "20px",
      background: "#222",
      color: "white",
      borderRadius: "10px",
      fontFamily: "Arial"
    }}>
      <h2>CCNA Hub Broadcast Simulator</h2>

      <p>Three PCs connected to a Hub.  
         When one PC sends data → Hub broadcasts to ALL PCs.</p>

      <div style={{ display: "flex", justifyContent: "space-between", marginTop: "20px" }}>
        <button onClick={() => sendData("PC1")} style={btnStyle}>Send from PC1</button>
        <button onClick={() => sendData("PC2")} style={btnStyle}>Send from PC2</button>
        <button onClick={() => sendData("PC3")} style={btnStyle}>Send from PC3</button>
      </div>

      <div style={{
        marginTop: "20px",
        background: "#000",
        padding: "15px",
        height: "200px",
        overflowY: "auto",
        borderRadius: "5px",
        border: "1px solid #555"
      }}>
        {messages.map((msg, index) => (
          <div key={index} style={{ marginBottom: "5px" }}>{msg}</div>
        ))}
      </div>
    </div>
  );
};

// button styling
const btnStyle = {
  padding: "10px",
  background: "#0d6efd",
  color: "white",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer"
};

export default HubBroadcastSimulator;
