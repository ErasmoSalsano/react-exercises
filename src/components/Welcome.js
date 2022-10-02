import React from "react";
import { Age } from "./Age";

export class Welcome extends React.Component{
  render() {
    return (
      <div>
        <p>Welcome, { this.props.name }!</p>
        { !!this.props.age //Check if it's present (in this case to be > 18 age should already be truth-y)
          && this.props.age > 18
          && <Age age={ this.props.age } /> }
      </div>
    )
  }
}

Welcome.defaultProps = {
  name: 'Mister X'
}