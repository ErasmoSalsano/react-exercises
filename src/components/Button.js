import React from "react";

export class Button extends React.Component{
  render(){
    return <button onClick = { this.props.clickHandler } name = { this.props.name } type = { this.props.type } disabled = { this.props.disabled }>{ this.props.content }</button>
  }
}

Button.defaultProps = {
  clickHandler : () => {console.log('Missing click handler')},
  content: 'Click here'
}