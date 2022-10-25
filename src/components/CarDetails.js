import { useEffect, useRef } from "react";

export const CarDetails = ({initialData})=>{
  const formRef = useRef();

  useEffect(() => {
    const dataKeys = Object.keys(initialData);
    dataKeys.forEach((key)=> {
      formRef.current.elements[key] && (formRef.current.elements[key].value = initialData[key])
    })
  }, [initialData])

  const handleSubmit = (e)=>{
    e.preventDefault();
    const arr = Array.from(formRef.current.elements);
    for(let i in arr){console.log(arr[i].value)}
  }

  return(
    <form ref={formRef} onSubmit={handleSubmit}>
      <input name='make' type='text' />
      <input name='model' type='text' required />
      <input name='year' type='number' min={1985} max={new Date().getFullYear()} required />
      <input name='color' type='text' />

      <button>submit</button>
    </form>
  )
}