import React from "react";

import { Button } from "./Button";

export class ClickTracker extends React.Component{

  state = {
    lastPressed: <></>,
    prova: <h1>prova</h1>
  }

  tracker = (event) => {
    let element = event.currentTarget.querySelector('img');
    element
    ? this.setState({
        lastPressed: <Button content={//Manca qulacosa, non mi piace sto metodo
          <img
            src={element.getAttribute('src')} 
            height={element.getAttribute('height')}
            alt={element.getAttribute('alt')}
          />
        } />
      })
    : this.setState({
        lastPressed: <Button content={
          event.currentTarget.innerHTML
        } />
      })
  }

  render(){
    return(
      <div>
        <Button clickHandler = { this.tracker } content='Primo' />
        <Button clickHandler = { this.tracker } content='Secondo' />
        <Button clickHandler = { this.tracker } content='Terzo' />
        <br />
        <Button clickHandler = { this.tracker } content={<img src={process.env.PUBLIC_URL+"number1.png"} height= '30px' alt='Numero 1' /> } />
        <Button clickHandler = { this.tracker } content={<img src={process.env.PUBLIC_URL+"number2.png"} height= '30px' alt='Numero 2'/> } />
        <Button clickHandler = { this.tracker } content={<img src={process.env.PUBLIC_URL+"number3.png"} height= '30px' alt='Numero 3'/> } />
        {<h1>Last clicked: { this.state.lastPressed }</h1>}
      </div>
    )
  }
}