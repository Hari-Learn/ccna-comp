import React, { useState } from "react";

const OSIExplorer = () => {

  // Default text before clicking any layer
  const defaultInfo = {
    title: "What is the OSI Model?",
    description: `
The OSI (Open Systems Interconnection) model is a conceptual framework
used to understand how networking systems communicate. It breaks
network communication into seven clear layers.

Why do we use it?
- Helps standardize networking protocols
- Makes troubleshooting easier
- Allows interoperability between vendors

How does it work?
- Data travels from Layer 7 (Application) down to Layer 1 (Physical)
  when sending.
- When receiving, it travels from Layer 1 back up to Layer 7.
`
  };

  // OSI layer details
  const layers = [
    {
      id: 1,
      title: "Layer 1 – Physical Layer",
      description:
        "Responsible for transmitting raw bits across physical media (cables, radio). Includes cables, NICs, repeaters, hubs, and electrical signals."
    },
    {
      id: 2,
      title: "Layer 2 – Data Link Layer",
      description:
        "Handles MAC addresses, framing, and error detection. Switches and bridges operate here. Divided into LLC and MAC sublayers."
    },
    {
      id: 3,
      title: "Layer 3 – Network Layer",
      description:
        "Responsible for IP addressing, routing, and packet forwarding. Routers operate here. Key protocols: IP, ICMP, ARP."
    },
    {
      id: 4,
      title: "Layer 4 – Transport Layer",
      description:
        "Provides end-to-end communication, segmentation, reliability. Protocols: TCP, UDP. Ensures data delivery."
    },
    {
      id: 5,
      title: "Layer 5 – Session Layer",
      description:
        "Manages sessions between applications: setup, maintain, terminate communication sessions. Examples: RPC, NetBIOS sessions."
    },
    {
      id: 6,
      title: "Layer 6 – Presentation Layer",
      description:
        "Formats and encrypts data. Translation, compression, and encryption (SSL/TLS) happen here."
    },
    {
      id: 7,
      title: "Layer 7 – Application Layer",
      description:
        "Closest to the user. Provides network services such as email, web, file transfer. Protocols: HTTP, FTP, SMTP, DNS."
    }
  ];

  const [selectedLayer, setSelectedLayer] = useState(defaultInfo);

  return (
    <div
      style={{
        display: "flex",
        width: "80%",
        margin: "40px auto",
        fontFamily: "Arial, sans-serif",
      }}
    >
      {/* Left side menu */}
      <div style={{ width: "30%", borderRight: "2px solid #ddd" }}>
        <h2>OSI Model Layers</h2>

        {layers.map((layer) => (
          <div
            key={layer.id}
            onClick={() => setSelectedLayer(layer)}
            style={{
              padding: "12px",
              margin: "6px 0",
              background: "#f5f5f5",
              cursor: "pointer",
              borderRadius: "5px",
              transition: "0.2s",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.background = "#e8e8e8")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.background = "#f5f5f5")
            }
          >
            {layer.title}
          </div>
        ))}
      </div>

      {/* Right side details box */}
      <div style={{ width: "70%", padding: "20px" }}>
        <div
          style={{
            background: "#fafafa",
            padding: "20px",
            borderRadius: "8px",
            border: "1px solid #ddd",
            minHeight: "300px",
            whiteSpace: "pre-line",
          }}
        >
          <h2>{selectedLayer.title}</h2>
          <p>{selectedLayer.description}</p>
        </div>
      </div>
    </div>
  );
};

export default OSIExplorer;
