import React from "react";

const ProductSpecs = () => {
  const specs = [
    { term: "Brand", detail: "Acme Electronics" },
    { term: "Model", detail: "X200 Ultra" },
    { term: "Battery Life", detail: "12 hours" },
    { term: "Weight", detail: "1.3 kg" }
  ];

  return (
    <dl>
      {specs.map((spec, i) => (
        <React.Fragment key={i}>
          <dt>{spec.term}</dt>
          <dd>{spec.detail}</dd>
        </React.Fragment>
      ))}
    </dl>
  );
};

export default ProductSpecs;
