import React from "react";

export class TodoList extends React.Component{

  state = {
    items: [],
    newTodo: null,
    addButtonState: true
  }

  handleInputChange = (event) => {
    this.setState({
      newTodo: event.target.value,
      addButtonState: !event.target.value.trim()
    })
  }

  addTodo = ()=>{
    this.setState({
      items: [...this.state.items, this.state.newTodo]
    })
  }

  render(){
    return(
      <div>
        <ul>
          {this.state.items.map((item)=><li>{item}</li>)}
        </ul>
        <input name='todo' type='text' onChange={this.handleInputChange} value={this.state.newTodo} placeholder='Compile with todo'></input>
        <button type='button' onClick={this.addTodo} disabled={this.state.addButtonState}>Add todo</button>
      </div>
    )
  }
}
