import React from "react";

export class Colors extends React.Component{
  render(){
    return(
      <ul>
        {
          this.props.colors.map((color, index)=><li key={color + index}>{ color }</li>)
        }
      </ul>
    )
  }
}
// Create a Colors component that renders a ul tag with 
// a li tag for each color passed in the items prop. The items prop should be an array of strings.