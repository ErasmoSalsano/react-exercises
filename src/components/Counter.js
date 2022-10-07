import React from "react";


export class Counter extends React.Component{

  state = {
    count: this.props.initialCount
  }

  constructor(props){
    super(props)

    setInterval(() => {
      this.setState((state)=>{
        return {
          count: state.count + this.props.incrementAmount
        }
      })
    }, this.props.incrementInterval)
  }

  render(){
    return<h1>{ this.state.count }</h1>
  }
}

Counter.defaultProps = {
    initialCount: 0,
    incrementAmount: 1,
    incrementInterval: 1000
}