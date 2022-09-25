import React from "react";
import "./CardDisplay.css";

const formatCardNumber = (value) => {
  const regex = /^(\d{0,4})(\d{0,4})(\d{0,4})(\d{0,4})$/g;
  let onlyNumbers = value.replace(/[^\d]/g, "");

  return onlyNumbers.replace(regex, (regex, $1, $2, $3, $4) =>
    [$1, $2, $3, $4].filter((group) => !!group).join(" ")
  );
};

const CardDisplay = ({ name, number, month, year, cvc }) => {
  return (
    <div className="card-display">
      <div className="card-display__container">
        <div className="card-back__container">
          <p>{cvc}</p>
        </div>
        <div className="card-display__card-front-container">
          <div className="card-display__circle-container">
            <div className="card-display__circle-1"></div>
            <div className="card-display__circle-2"></div>
          </div>
          <p className="card-display__card-number">
            {formatCardNumber(number)}
          </p>
          <div className="card-display__card-details">
            <p className="card-display__name">{name}</p>
            <p className="card-display__expirey">
              {month}/{year}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDisplay;
