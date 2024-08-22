// import React from "react";
// import { useState } from "react";
import PropTypes from "prop-types";


const Feedback = ({ good, neutral, bad }) => {



  return (
    <>
      <p>Good: { good} </p>
      <p>Bad: {bad}</p>
      <p>Neutral: {neutral}</p>
      <p>Total:</p>
      <p>Positive:</p>
    </>
  );
};

export default Feedback;


Feedback.propTypes = {
  good: PropTypes.number,
  bad: PropTypes.number,
  neutral: PropTypes.number,
};