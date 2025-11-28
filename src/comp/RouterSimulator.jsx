import React, { useState } from "react";

const RouterSimulator = () => {
  const [output, setOutput] = useState([
    "Router>  (User EXEC mode)"
  ]);
  const [command, setCommand] = useState("");
  const [mode, setMode] = useState("user"); // user | privileged | global

  const handleCommand = (e) => {
    e.preventDefault();

    const newOutput = [...output];

    // USER EXEC MODE
    if (mode === "user") {
      if (command === "enable") {
        newOutput.push("Router#  (Privileged EXEC mode)");
        setMode("privileged");
      } else {
        newOutput.push(`Router> ${command}`);
      }
    }

    // PRIVILEGED EXEC MODE
    else if (mode === "privileged") {
      if (command === "configure terminal") {
        newOutput.push("Enter configuration commands, one per line.");
        newOutput.push("Router(config)#  (Global Configuration mode)");
        setMode("global");
      } else {
        newOutput.push(`Router# ${command}`);
      }
    }

    // GLOBAL CONFIG MODE
    else if (mode === "global") {
      if (command === "exit") {
        newOutput.push("Router#  (Back to Privileged EXEC mode)");
        setMode("privileged");
      } else {
        newOutput.push(`Router(config)# ${command}`);
      }
    }

    setOutput(newOutput);
    setCommand("");
  };

  return (
    <div
      style={{
        width: "600px",
        margin: "20px auto",
        background: "#000",
        color: "#0f0",
        padding: "20px",
        fontFamily: "monospace",
        borderRadius: "8px"
      }}
    >
      <h3>CCNA Router CLI Simulator (Arrow Functions)</h3>

      <div
        style={{
          background: "#111",
          padding: "10px",
          height: "300px",
          overflowY: "auto",
          border: "1px solid #333"
        }}
      >
        {output.map((line, i) => (
          <div key={i}>{line}</div>
        ))}
      </div>

      <form onSubmit={handleCommand}>
        <input
          type="text"
          value={command}
          onChange={(e) => setCommand(e.target.value)}
          placeholder="Type a router command..."
          style={{
            width: "100%",
            marginTop: "10px",
            padding: "10px",
            background: "#222",
            color: "#0f0",
            border: "1px solid #444"
          }}
        />
      </form>
    </div>
  );
};

export default RouterSimulator;
