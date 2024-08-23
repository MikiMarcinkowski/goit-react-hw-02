import PropTypes from "prop-types";

import css from "./Feedback.module.css"; // Import modułu CSS

const Feedback = ({ good, bad, neutral, totalFeedback, positivePercent }) => {
  return (
    <div className={css.feedbackContainer}>
      <ul className={css.feedbackList}>
        <li className={css.feedbackItem}>Good: {good}</li>
        <li className={css.feedbackItem}>Bad: {bad}</li>
        <li className={css.feedbackItem}>Neutral: {neutral}</li>
        <li className={css.feedbackItem}>Total: {totalFeedback}</li>
        <li className={css.feedbackItem}>Positive: {positivePercent}%</li>
      </ul>
    </div>
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
