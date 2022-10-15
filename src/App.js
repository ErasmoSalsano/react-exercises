import React from "react";
import { ClickCounter } from "./components/ClickCounter";
import { ClickTracker } from "./components/ClickTracker";
import { Colors } from "./components/Colors";
import { Counter } from "./components/Counter";

import { Hello } from "./components/Hello"
import { InteractiveWelcome } from "./components/InteractiveWelcome";
import { Login } from "./components/Login";
import { TodoList } from "./components/ToDoList";
import { UncontrolledLogin } from "./components/UncontrolledLogin";
import { Welcome } from "./components/Welcome";

const login = (dati) => {
  console.log(dati)
}

const colors = [
  {id:0, name:'Blue'}, 
  {id:0, name:'yellow'}, 
  {id:0, name:'cobalt'}, 
  {id:0, name:'magenta'}
]
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
        <h4>Controlled Login</h4>
        <Login onLogin = { login } />
        <h4>Uncontrolled Login</h4>
        <UncontrolledLogin onLogin = { login } />
        <br />
        <h4>Colors</h4>
        <Colors items={colors} />
        <h4>Todo list</h4>
        <TodoList />
      </div>
    )
  }
}
