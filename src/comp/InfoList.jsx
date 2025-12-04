import React from "react";

const InfoList = () => {
  const items = [
    { term: "Name", detail: "John Doe" },
    { term: "Occupation", detail: "Software Developer" },
    { term: "Location", detail: "New York, USA" }
  ];

  return (
    <dl>
      {items.map((item, index) => (
        <React.Fragment key={index}>
          <dt>{item.term}</dt>
          <dd>{item.detail}</dd>
        </React.Fragment>
      ))}
    </dl>
  );
};

export default InfoList;
