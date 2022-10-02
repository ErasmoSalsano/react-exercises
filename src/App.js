import React from "react";

import { Hello } from "./components/Hello"
import { Welcome } from "./components/Welcome";

export class App extends React.Component{
  render(){
    return(
      <div>
        <Hello />
        <Welcome name={ <strong> Sciuti </strong> }  age={ 20 } />
      </div>
    )
  }
}
