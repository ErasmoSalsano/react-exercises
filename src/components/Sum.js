export function Sum ({numbers=[0]}){
  return <h1>{ numbers.reduce((previous, current) => previous + current, 0) }</h1>
}