import React from "react";
import { CounterDisplay } from "./CounterDisplay";

export class ClickCounter extends React.Component {
  
  state = {
    count: this.props.initialCount,
  }

  handleCounterIncrement = () => {
    this.setState((state) => {
      return {
        count: state.count + this.props.incrementAmount
      }
    })
  }
  
  render() {
    return(
      <div>
        <CounterDisplay content = { this.state.count } />
        <button onClick = { this.handleCounterIncrement }>Increment Counter</button>
      </div>
    )
  }
}

ClickCounter.defaultProps = {
  initialCount: 0,
  incrementAmount: 1
}
