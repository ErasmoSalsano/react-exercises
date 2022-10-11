import React from "react";

import { Welcome } from "./Welcome";

export class InteractiveWelcome extends React.Component {

  state = {
    name: ''
  }

  handleChange = (event) => {
    this.setState({
      name: event.target.value
    })
  }

  render(){
    return(
    <div>
      <input onChange={ this.handleChange } />
      <Welcome name = { this.state.name } />
    </div>
    )
  }
}