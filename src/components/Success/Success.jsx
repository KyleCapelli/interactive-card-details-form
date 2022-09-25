import React from "react";
import "./Success.css";

const Success = ({ onContinue }) => {
  return (
    <div className="success__container">
      <img
        src={`${process.env.PUBLIC_URL}/icon-complete.svg`}
        alt="tick-logo"
      />
      <h4>THANK YOU!</h4>
      <p>We've added your card details</p>
      <button onClick={onContinue} className="form__button">
        Continue
      </button>
    </div>
  );
};

export default Success;
