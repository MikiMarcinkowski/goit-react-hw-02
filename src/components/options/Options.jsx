// import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import css from "./Options.module.css"; // Import modułu CSS

const Options = ({ updateFeedback, handleReset, totalFeedback }) => {
  return (
    <div className={css.optionsContainer}>
      <button
        className={css.optionsButton}
        onClick={() => updateFeedback("good")}
      >
        Good
      </button>
      <button
        className={css.optionsButton}
        onClick={() => updateFeedback("neutral")}
      >
        Neutral
      </button>
      <button
        className={css.optionsButton}
        onClick={() => updateFeedback("bad")}
      >
        Bad
      </button>
      {totalFeedback > 0 && (
        <button className={css.resetButton} onClick={handleReset}>
          Reset
        </button>
      )}
    </div>
  );
};

export default Options;

Options.propTypes = {
  updateFeedback: PropTypes.func,
  handleReset: PropTypes.func,
  totalFeedback: PropTypes.number,
};
