import React, { useState } from "react";

const RouterSimulator1 = () => {
  const [screen, setScreen] = useState(["Router>"]); // What we see on screen
  const [command, setCommand] = useState("");         // What we type
  const [mode, setMode] = useState("user");           // user | priv | config

  const runCommand = (e) => {
    e.preventDefault();

    let updated = [...screen];

    if (mode === "user") {
      if (command === "enable") {
        updated.push("Router#");
        setMode("priv");
      } else {
        updated.push("Router> " + command);
      }
    }

    else if (mode === "priv") {
      if (command === "configure terminal") {
        updated.push("Router(config)#");
        setMode("config");
      } else {
        updated.push("Router# " + command);
      }
    }

    else if (mode === "config") {
      if (command === "exit") {
        updated.push("Router#");
        setMode("priv");
      } else {
        updated.push("Router(config)# " + command);
      }
    }

    setScreen(updated);
    setCommand("");
  };

  return (
    <div style={{ padding: "20px", background: "#000", color: "#0f0", width: "500px", fontFamily: "monospace" }}>
      
      <div style={{ height: "250px", overflowY: "auto", border: "1px solid #333", padding: "10px" }}>
        {screen.map((line, i) => <div key={i}>{line}</div>)}
      </div>

      <form onSubmit={runCommand}>
        <input 
          type="text"
          value={command}
          onChange={(e) => setCommand(e.target.value)}
          placeholder="Type a command..."
          style={{ width: "100%", marginTop: "10px", padding: "8px", background: "#111", color: "#0f0", border: "1px solid #444" }}
        />
      </form>
    </div>
  );
};

export default RouterSimulator1;
