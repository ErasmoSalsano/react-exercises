import React from "react";
import { ClickCounter } from "./components/ClickCounter";
import { ClickTracker } from "./components/ClickTracker";
import { Counter } from "./components/Counter";

import { Hello } from "./components/Hello"
import { Welcome } from "./components/Welcome";

export class App extends React.Component{
  render(){
    return(
      <div>
        <Hello />
        <Welcome name={ 'John' }  age={ 18 } />
        <Counter initialCount={ 1 } incrementAmount={ 1 } incrementInterval={ 500 }/>
        <ClickCounter />
        <ClickTracker />
      </div>
    )
  }
}
