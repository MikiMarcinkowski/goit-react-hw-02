// import { useEffect, useState } from "react";
import PropTypes from "prop-types";

const Options = ({ updateFeedback, handleReset, totalFeedback }) => {
  return (
    <>
      <button onClick={() => updateFeedback("good")}>Good</button>
      <button onClick={() => updateFeedback("bad")}>Bad</button>
      <button onClick={() => updateFeedback("neutral")}>Neutral</button>
     {totalFeedback > 0  &&  <button onClick={handleReset}>Reset</button>}
     
     
    </>
  );
};

export default Options;

Options.propTypes = {
  updateFeedback: PropTypes.func,
  handleReset: PropTypes.func,
  totalFeedback: PropTypes.number,
};
