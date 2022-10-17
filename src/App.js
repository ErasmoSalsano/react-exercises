import React from "react";
import { ClickCounter } from "./components/ClickCounter";
import { ClickTracker } from "./components/ClickTracker";
import { Colors } from "./components/Colors";
import { Container } from "./components/Container";
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
  {id:1, name:'yellow'}, 
  {id:2, name:'cobalt'}, 
  {id:3, name:'magenta'}
]
export class App extends React.Component{
  render(){
    return(
      <div>
        <Hello />
        {/* Passing the className as a prop of the component when used prevents it from using the class in every occasion */}
        <Welcome /* className='welcome' */ name={ 'John' }  age={ 18 } />
        <Counter initialCount={ 1 } incrementAmount={ 10 } incrementInterval={ 200 }/>
        <ClickCounter />
        <ClickTracker />
        <h4>Interactive welcome</h4>
        <InteractiveWelcome />
        <h4>Controlled Login</h4>
        <Login onLogin = { login } />
        <h4>Uncontrolled Login</h4>
        <UncontrolledLogin onLogin = { login } />
        <br />
        <h4>Colors</h4>
        <Colors items={colors} />
        <h4>Todo list</h4>
        <TodoList 
          render={(items, handleRemoveTodo)=>{
            return(
              <ul>
                {items.map((item, index)=><li key={index}><button type='button' onClick={(event)=>{handleRemoveTodo(event, index)}} >Remove</button>{item}</li>)}
              </ul>
            )
          }}
        >
        </TodoList>
        <h4>Todo list</h4>
        <Container Title='Lorem Ipsum'>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio minima praesentium, quod ab veniam temporibus?
          </p>
        </Container>
      </div>
    )
  }
}
