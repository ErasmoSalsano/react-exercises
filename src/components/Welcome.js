import { Age } from "./Age";


export function Welcome({name='Mister X', age}){

  return(
    <div className="welcome">
      <p>Welcome, <strong> { name } </strong>!</p>
        { !!age //Check if it's present (in this case to be > 18 age should already be truth-y)
          // && age > 18  //Commentato per provare conditional rendering-05
          && age < 65
          && name === 'John'
          && <Age age={ age } /> }
    </div>
  )
}