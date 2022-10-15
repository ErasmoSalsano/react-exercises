import React from "react";

export class TodoList extends React.Component{

  state = {
    items: [],
    newTodo: '',
    addButtonState: true
  }

  handleInputChange = (event) => {
    this.setState({
      newTodo: event.target.value,
      addButtonState: !event.target.value.trim()
    })
  }

  handleAddTodo = ()=>{
    this.setState({
      items: [...this.state.items, this.state.newTodo],
      newTodo: ''
    })
  }

  handleListReset= ()=>{
    this.setState({
      items: []
    })
  }

  render(){
    return(
      <div>
        <ul>
          {this.state.items.map((item, index)=><li key={index}>{item}</li>)}
        </ul>
        <input name='todo' type='text' onChange={this.handleInputChange} value={this.state.newTodo} placeholder='Compile with todo'></input>
        <button type='button' onClick={this.handleAddTodo} disabled={this.state.addButtonState}>Add todo</button>
        <button type='reset' onClick={this.handleListReset}>Reset list</button>
      </div>
    )
  }
}
