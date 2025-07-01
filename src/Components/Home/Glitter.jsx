import React from "react";
import "./Glitter.css";

const starSizes = [
  "star-small",
  "star-medium",
  "star-large"
];

const Glitter = () => {
  return (
    <div className="glitter-container">
      {[...Array(35)].map((_, i) => (
        <span
          key={i}
          className={`glitter glitter-${i + 1} ${starSizes[Math.floor(Math.random() * starSizes.length)]}`}
        ></span>
      ))}
    </div>
  );
};

export default Glitter;