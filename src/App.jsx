// import { useState } from "react";

import "./App.css";
import Descryption from "./components/descryption/Descryption";
import Options from "./components/options/Options";
import Feedback from "./components/feedback/Feedback";
import { useEffect, useState } from "react";

function App() {
  const [state, setState] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const handleClick = (feedbackType) => {
    setState((prevState) => ({
      ...prevState,
      [feedbackType]: prevState[feedbackType] + 1,
    }));
  };

useEffect(()=>{console.log(state)})
  return (
    <>
      <Descryption name="Nice Things Happens Café" />
      <Options handleClick={handleClick} state={state} />
      <Feedback state={state} />
    </>
  );
}

export default App;
