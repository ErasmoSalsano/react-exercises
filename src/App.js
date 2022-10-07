import React from "react";
import { Counter } from "./components/Counter";

import { Hello } from "./components/Hello"
import { Welcome } from "./components/Welcome";

export class App extends React.Component{
  render(){
    return(
      <div>
        <Hello />
        <Welcome name={ 'John' }  age={ 18 } />
        <Counter />
      </div>
    )
  }
}
