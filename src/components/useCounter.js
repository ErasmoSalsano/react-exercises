import { useState } from "react";

export function useCounter(initialValue){
  const [counter, setCounter] = useState(initialValue)
  const handleCounterIncrement = () => setCounter((counter) => counter + 1);
  const handleCounterDecrement = () => setCounter((counter) => counter + 1);
  const handleCounterReset = () => setCounter((counter) => counter + 1);

  return{
    counter: counter,
    increment: handleCounterIncrement,
    decrement: handleCounterDecrement,
    reset: handleCounterReset
  }
}