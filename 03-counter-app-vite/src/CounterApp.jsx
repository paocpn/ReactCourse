import { useState } from "react";
import PropTypes from "prop-types";

export const CounterApp = ({ value }) => {
  const [counter, setCounter] = useState(value);

  const handleAdd = () => {
    setCounter(counter + 1);
  };
  const subtractCounter = () => {
    setCounter(counter - 1);
  };
  const resetCounter = () => {
    setCounter(value);
  };

  return (
    <>
      <h1>CounterApp</h1>
      <h2>{counter}</h2>
      <button onClick={handleAdd}>+1</button>
      <button onClick={subtractCounter}>-1</button>
      <button onClick={resetCounter}>Reset</button>
    </>
  );
};

CounterApp.propTypes = {
  value: PropTypes.number.isRequired,
};

CounterApp.defaultProps = {
  CounterApp: "No hay titulo",
  value: "no hay valor ",
};
