import { useState } from "react";

import Header from "./components/Header";
import Input from "./components/Input";
import Results from "./components/Results";

const initialValues = {
  initialInvestment: 10000,
  annualInvestment: 1000,
  expectedReturn: 12,
  duration: 5,
};

function App() {
  const [userInput, setUserInput] = useState(initialValues);

  const inputIsValid = userInput.duration >= 1;

  function handleInputChange(field, value) {
    setUserInput((prevValues) => {
      const updatedValues = { ...prevValues, [field]: +value };
      return updatedValues;
    });
  }

  return (
    <>
      <Header />
      <Input userInput={userInput} onChange={handleInputChange} />
      {!inputIsValid && (
        <p className="center">Please enter a duration greater than zero.</p>
      )}
      {inputIsValid && <Results input={userInput} />}
    </>
  );
}

export default App;
