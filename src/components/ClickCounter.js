import { useState } from "react";
import { Button } from "./Button"
import { CounterDisplay } from "./CounterDisplay"

export function ClickCounter({initialCount = 0, incrementAmount = 1}){

  const [count, setCount] = useState(initialCount);
  
  const handleCounterIncrement = ()=>{
    setCount((count)=>count + incrementAmount)
  }

  return(
    <div>
      <CounterDisplay content = { count } />
      <Button clickHandler = { handleCounterIncrement } content = 'Increment Counter' />
    </div>
  )
}