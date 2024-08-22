import { useEffect, useState } from "react";

import "./App.css";
import Descryption from "./components/descryption/Descryption";
import Options from "./components/options/Options";
import Feedback from "./components/feedback/Feedback";
import Notification from "./components/notification/Notification";

function App() {
  const [state, setState] = useState(() => {
    const savedStorage = localStorage.getItem("state");
    return (savedStorage ? JSON.parse(savedStorage) : {
      good: 0,
      bad: 0,
      neutral: 0,
    })
  });
    
    
 
    




  const updateFeedback = (feedbackType) => {
    setState((prevState) => ({
      ...prevState,
      [feedbackType]: prevState[feedbackType] + 1,
    }));
  };

  const handleReset = () => {
    setState({
      good: 0,
      bad: 0,
      neutral: 0,
    });
  };

  useEffect(() => {
    console.log(state);
  }, [state]);
  useEffect(() => {
    console.log(localStorage);
    localStorage.setItem("state", JSON.stringify(state));
  }, [state]);

  const { good, neutral, bad } = state;

  const totalFeedback = good + neutral + bad;

  const positivePercent = Math.round(((good + neutral) / totalFeedback) * 100);


  return (
    <>
      <Descryption name="Nice Things Happens Café" />
      <Options
        updateFeedback={updateFeedback}
        handleReset={handleReset}
        totalFeedback={totalFeedback}
      
      />

      {totalFeedback !== 0 ? (
        <Feedback
          good={good}
          neutral={neutral}
          bad={bad}
          totalFeedback={totalFeedback}  positivePercent={positivePercent}
        />
      ) : (
        <Notification />
      )}
    </>
  );
}

export default App;
