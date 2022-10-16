import React from "react";


export class CounterDisplay extends React.Component{
  render(){
    
    return <h1 style={this.props.style}>{ this.props.content }</h1>
  }
}