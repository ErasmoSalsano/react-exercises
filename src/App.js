import React from "react";
import { ClickCounter } from "./components/ClickCounter";
import { ClickTracker } from "./components/ClickTracker";
import { Counter } from "./components/Counter";

import { Hello } from "./components/Hello"
import { InteractiveWelcome } from "./components/InteractiveWelcome";
import { Login } from "./components/Login";
import { Welcome } from "./components/Welcome";

const login = (dati) => {
  console.log(dati)
}

export class App extends React.Component{
  render(){
    return(
      <div>
        <Hello />
        <Welcome name={ 'John' }  age={ 18 } />
        <Counter initialCount={ 1 } incrementAmount={ 1 } incrementInterval={ 500 }/>
        <ClickCounter />
        <ClickTracker />
        <InteractiveWelcome />
        <Login onLogin = { login } />
      </div>
    )
  }
}
