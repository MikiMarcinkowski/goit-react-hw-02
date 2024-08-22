import PropTypes from "prop-types";

const Descryption = ({ name }) => {
  return (
    <>
      <h1>{name}</h1>
      <p>
        Please leave your feedback about our service by selecting one of the
        options below.
      </p>
    </>
  );
};

export default Descryption;

Descryption.propTypes = {
name: PropTypes.string.isRequired
}