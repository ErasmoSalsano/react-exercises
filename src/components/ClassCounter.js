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
    if (this.state.count > 500 /* this.props.initialCount * 10  (Modificato per l'esercizio styling components)*/){
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
    const count = this.state.count
    const style = {
      backgroundColor: `rgb(
        ${count < 255 ? 255 - count : 0}, 
        ${count > 255 ? 255 - (count - 255) : 255}, 
        ${count < 255 ? 255 - count : 0}
        )`,
      color:`rgb(${count/2}, ${count/2}, ${count/2})`
    }

    return (
      <CounterDisplay style = {style} content={ this.state.count } />
    )
  }
}

Counter.defaultProps = {
    initialCount: 0,
    incrementAmount: 1,
    incrementInterval: 1000
}