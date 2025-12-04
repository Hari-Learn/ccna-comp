import React from "react";

const UserProfile = () => {
  const profileSections = [
    {
      sectionTitle: "Personal Information",
      items: [
        { term: "Full Name", detail: "Alice Johnson" },
        { term: "Age", detail: 29 },
        { term: "Email", detail: "alice@example.com" }
      ]
    },
    {
      sectionTitle: "Skills",
      items: [
        { term: "Frontend", detail: "React, TypeScript, Tailwind" },
        { term: "Backend", detail: "Node.js, Express, MongoDB" },
        {
          term: "Other",
          detail: ["Git", "Docker", "CI/CD"], // Multiple values
          isList: true
        }
      ]
    },
    {
      sectionTitle: "Work Experience",
      items: [
        {
          term: "Recent Job",
          detail: {
            company: "TechNova Ltd.",
            role: "Senior Developer",
            years: "2021–2024"
          },
          isObject: true
        }
      ]
    }
  ];

  return (
    <div>
      {profileSections.map((section, index) => (
        <div key={index} style={{ marginBottom: "20px" }}>
          <h3>{section.sectionTitle}</h3>

          <dl>
            {section.items.map((item, idx) => (
              <React.Fragment key={idx}>
                <dt>{item.term}</dt>

                <dd>
                  {/* Case 1: detail is a list */}
                  {item.isList && Array.isArray(item.detail) && (
                    <ul>
                      {item.detail.map((val, i) => (
                        <li key={i}>{val}</li>
                      ))}
                    </ul>
                  )}

                  {/* Case 2: detail is an object */}
                  {item.isObject && !Array.isArray(item.detail) && (
                    <div>
                      <strong>{item.detail.role}</strong> at{" "}
                      <em>{item.detail.company}</em>
                      <br />
                      <small>Years: {item.detail.years}</small>
                    </div>
                  )}

                  {/* Case 3: regular string/number */}
                  {!item.isList && !item.isObject && item.detail}
                </dd>
              </React.Fragment>
            ))}
          </dl>
        </div>
      ))}
    </div>
  );
};

export default UserProfile;
