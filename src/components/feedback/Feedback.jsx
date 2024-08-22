// import React from "react";
// import { useState } from "react";
import PropTypes from "prop-types";

const Feedback = ({ good, bad, neutral, totalFeedback, positivePercent }) => {
  return (
    <>
      <p>Good: {good} </p>
      <p>Bad: {bad}</p>
      <p>Neutral: {neutral}</p>
      <p>Total: {totalFeedback}</p>
      <p>Positive: {positivePercent}</p>
    </>
  );
};

export default Feedback;

Feedback.propTypes = {
  good: PropTypes.number,
  bad: PropTypes.number,
  neutral: PropTypes.number,
  totalFeedback: PropTypes.number,
  positivePercent: PropTypes.number,
};
