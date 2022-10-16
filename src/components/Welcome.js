import React from "react";
import { Age } from "./Age";

export class Welcome extends React.Component{
  render() {
    return (
      <div className='welcome'/* {this.props.className} */>
        {/* passing the prop from the component uses the class only when passed. 
        Putting it in the element will use it everytime the component is used */}
        <p>Welcome, {!!this.props.name && <strong> { this.props.name } </strong>}!</p>
        { !!this.props.age //Check if it's present (in this case to be > 18 age should already be truth-y)
          // && this.props.age > 18  //Commentato per provare conditional rendering-05
          && this.props.age < 65
          && this.props.name === 'John'
          && <Age age={ this.props.age } /> }
      </div>
    )
  }
}

Welcome.defaultProps = {
  name: 'Mister X'
}