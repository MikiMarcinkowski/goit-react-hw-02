import PropTypes from "prop-types";
import css from "./Descryption.module.css"; // Import modułu CSS

const Descryption = ({ name }) => {
  return (
    <>
      <h1 className={css.descriptionTitle}>{name}</h1>
      <h3 className={css.descriptionSubtitle}>
        Please leave your feedback about our service by selecting one of the
        options below.
      </h3>
    </>
  );
};

export default Descryption;

Descryption.propTypes = {
name: PropTypes.string.isRequired
}