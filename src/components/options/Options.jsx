// import { useEffect, useState } from "react";
import PropTypes from "prop-types";


const Options = ({handleClick}) => {
  // const [rates, setRates] = useState({ good: 0, bad: 0, neutral: 0 });

  // useEffect(() => {
  //   const localRates = localStorage.getItem('rates');
  //   if (localRates) {
  //     setRates(JSON.parse(localRates))
  //   }
  // }, []);


  // const updateFeedback = (feedbackType) => {
  //   setRates((prevState) => ({
  //     ...prevState,
  //     [feedbackType]: prevState[feedbackType] + 1,
  //   }));

  //   console.log(rates);
  // };

  // const handleReset = () => {
  //   setRates({
  //     good: 0,
  //     bad: 0,
  //     neutral: 0,
  //   });
  //   console.log(rates);
  // };
  // useEffect(() => {
    
  //   console.log(localStorage);
  //   localStorage.setItem("rates", JSON.stringify(rates));
  // }, [rates]);


  return (
    <>
      <button onClick={()=>handleClick('good')}>Good</button>
      <button onClick={() => handleClick("bad")}>Bad</button>
      <button onClick={() => handleClick("neutral")}>Neutral</button>
      {/* <button onClick={handleReset}>Reset</button> */}

    </>
  );
};

export default Options;

Options.propTypes = {
  handleClick: PropTypes.func
};