import { useEffect, useState } from "react"
import { CounterDisplay } from "./CounterDisplay"

export function Counter ({
  initialCount= 0,
  incrementAmount= 1,
  incrementInterval= 1000
}){

  const [count, setCount] = useState(initialCount)

  useEffect(()=>{
    count > 500 && setCount(initialCount)
    const Interval = setInterval(() => {
      setCount(count + incrementAmount)
    }, incrementInterval)
    return () => clearInterval(Interval)
  }, [count, incrementAmount, incrementInterval, initialCount])

  const style = {
    backgroundColor: `rgb(
      ${count < 255 ? 255 - count : 0}, 
      ${count > 255 ? 255 - (count - 255) : 255}, 
      ${count < 255 ? 255 - count : 0}
      )`,
    color:`rgb(${count/2}, ${count/2}, ${count/2})`
  }

  return (
    <CounterDisplay style = {style} content = { count } />
  )

}