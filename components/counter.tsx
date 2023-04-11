"use client";
import { useState } from "react";

const Counter = ({ initialValue = 0 }: { initialValue?: number }) => {
  const [count, setCount] = useState(initialValue);
  return (
    <div>
      <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
    </div>
  );
};

export default Counter;
