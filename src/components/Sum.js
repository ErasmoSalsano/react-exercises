export function Sum ({numbers=[]}){
  return <h1>{ numbers.reduce((previous, current) => previous + current, 0) }</h1>
}