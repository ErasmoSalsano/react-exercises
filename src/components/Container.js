import React from "react";


export class Container extends React.Component{
  render(){
    const containerStyle ={
      'background-color': 'white',
      'border': '2px solid red',
      'padding': '0 1rem'
    }
    return <div style={containerStyle}>
      <h5>{this.props.Title}</h5>
      {this.props.children}
    </div>
  }
}