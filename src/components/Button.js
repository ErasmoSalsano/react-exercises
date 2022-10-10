import React from "react";

export class Button extends React.Component{
  render(){
    return <button onClick = { this.props.clickHandler }>{ this.props.text }</button>
  }
}

Button.defaultProps = {
  clickHandler : () => {console.log('Missing click handler')},
  text: 'Click here'
}