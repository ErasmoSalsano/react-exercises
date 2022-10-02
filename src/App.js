import React from "react";

import { Hello } from "./components/Hello"
import { Welcome } from "./components/Welcome";

export class App extends React.Component{
  render(){
    return(
      <div>
        <Hello />
        <Welcome name='Sciuti' age={ 25 } />
      </div>
    )
  }
}
