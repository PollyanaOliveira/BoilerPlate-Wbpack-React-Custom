import { useState } from "react";
import "./counter.css";

const [count, setCount] = useState(0);

const increment = () => {
  setCount(count + 1);
};

const Counter = () => {
  return (
    <div>
      <h2>{count}</h2>
      <button type="button" onClick={increment}>
        Increment
      </button>
    </div>
  );
};

export default Counter;
