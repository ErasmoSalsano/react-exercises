import { useCallback, useState } from "react";

export function useCounter(initialValue){
  const [counter, setCounter] = useState(initialValue)
  
  const handleCounterIncrement = useCallback(() => setCounter((counter) => counter + 1), []);
  const handleCounterDecrement = useCallback(() => setCounter((counter) => counter - 1), []);
  const handleCounterReset = useCallback(() => setCounter(initialValue), [initialValue]);

  return{
    counter: counter,
    increment: handleCounterIncrement,
    decrement: handleCounterDecrement,
    reset: handleCounterReset
  }
}