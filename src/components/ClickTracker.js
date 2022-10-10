import React from "react";

import { Button } from "./Button";

export class ClickTracker extends React.Component{

  state = {
    lastPressed: <></>
  }

  tracker = (event) => {
    this.setState({
      lastPressed: event.target.innerHTML
    })
  }

  render(){
    return(
      <div>
        <Button clickHandler = { this.tracker } text='Uno' />
        <Button clickHandler = { this.tracker } text='Due' />
        <Button clickHandler = { this.tracker } text='Tre' />
        <h1>Last clicked: { this.state.lastPressed }</h1>
      </div>
    )
  }
}