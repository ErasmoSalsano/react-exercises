import React from "react";
import { CounterDisplay } from "./CounterDisplay";


export class Counter extends React.Component{

  state = {
    count: this.props.initialCount,
  }

  componentDidMount(){
    this._interval = setInterval(() => {
      this.setState((state)=>{
        return {
          //If the new value is > 10 * initialCount it will reset to initialCount value.
          //initialCount set to 0 will always render 0 (0 * 10 = 0)
          count: /* (state.count + this.props.incrementAmount) > (this.props.initialCount * 10) 
            ? this.props.initialCount   
            : */ state.count + this.props.incrementAmount
        }
      })
    }, this.props.incrementInterval)
  }

  componentDidUpdate(){
    if (this.state.count > this.props.initialCount * 10){
      console.log('Reset');
      this.setState(()=>{
        return {
          count: this.props.initialCount
        }
      })
    }
  }

  componentWillUnmount(){
    if(this._interval){
      clearInterval(this._interval);
    }
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