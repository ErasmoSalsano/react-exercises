import { useMemo } from "react"

export const FilteredList = ({list=[]}) => {
  const filtered = useMemo(() => list.filter((item) => item.age > 18), [list])

  return (
    <ul>
      {filtered.map((item)=>{
        return(
          <li key={item.id + item.name}>
            ID: {item.id} Name: {item.name} Age: {item.age}
          </li>
        )
      })}
    </ul>
  )
}