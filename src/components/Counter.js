import React from "react";
import { CounterDisplay } from "./CounterDisplay";


export class Counter extends React.Component{

  state = {
    count: this.props.initialCount,
    // amount: this.props.incrementAmount,
    // interval: this.props.incrementInterval
  }

  constructor(props){
    super(props)

    setInterval(() => {
      this.setState((state)=>{
        return {
          //If the new value is > 10 * initialCount it will reset to initialCount value.
          //initialCount set to 0 will always render 0 (0 * 10 = 0)
          count: (state.count + this.props.incrementAmount) > (this.props.initialCount * 10) 
            ? this.props.initialCount   
            : state.count + this.props.incrementAmount
        }
      })
    }, this.props.incrementInterval)
  }

  render(){
    return (
      <CounterDisplay content={ this.state.count } />
    )
  }
}

Counter.defaultProps = {
    initialCount: 0,
    incrementAmount: 1,
    incrementInterval: 1000
}