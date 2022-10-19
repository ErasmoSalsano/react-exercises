import React from "react";
import { ClickCounter } from "./components/ClickCounter";
import { ClickTracker } from "./components/ClickTracker";
import { Colors } from "./components/Colors";
import { Container } from "./components/Container";
import { Counter } from "./components/Counter";
import { DisplayLanguage } from "./components/DisplayLanguage";
import { Hello } from "./components/Hello"
import { InteractiveWelcome } from "./components/InteractiveWelcome";
import { LanguageContext } from "./components/LanguageContext";
import { Login } from "./components/Login";
import { Sum } from "./components/Sum";
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

  state = {
    language: 'en',
  }
  
  handleLanguageChange = (event)=>{
    this.setState({
      language: event.target.value,
    })
  }

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
        /* For render-Props-01 */
          /* render={(items, handleRemoveTodo)=>{
            return(
              <ul>
                {items.map((item, index)=><li key={index}><button type='button' onClick={(event)=>{handleRemoveTodo(event, index)}} >Remove</button>{item}</li>)}
              </ul>
            )
          }} */
        >
          {/* For Render-Props-02 */}
          {(items, handleRemoveTodo)=>{
            return(
              <ul>
                {items.map((item, index)=><li key={index}><button type='button' onClick={(event)=>{handleRemoveTodo(event, index)}} >Remove</button>{item}</li>)}
              </ul>
            )
          }}
        </TodoList>
        <h4>Component composition</h4>
        <Container Title='Lorem Ipsum'>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio minima praesentium, quod ab veniam temporibus?
          </p>
        </Container>
        <h4>Context</h4>
        <select onChange={this.handleLanguageChange} defaultValue='en'>
          <option value='en'>ENGLISH</option>
          <option value='it'>ITALIANO</option>
          <option value='fr'>FRANÇAIS</option>
          <option value='de'>DEUTSCH</option>
          <option value='es'>ESPAŅOL</option>
        </select>
        <LanguageContext.Provider value={this.state.language}>
          <DisplayLanguage />
        </LanguageContext.Provider>
        <h4>Sum</h4>
        <Sum  numbers={[10, 3, 5, 20]}/>
      </div>
    )
  }
}
