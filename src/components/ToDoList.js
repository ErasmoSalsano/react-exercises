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

  handleRemoveTodo=(event, toRemove)=>{
    console.log(event.target, event.target.index)
    this.setState((state)=>{
      return{items: state.items.filter((item, index)=> index!==Number(toRemove))}
    })
  }

  handleListReset = ()=>{
    this.setState({
      items: []
    })
  }

  render(){
    return(
      <div>
        <ul>
          {this.state.items.map((item, index)=><li key={item + index}>{item}<button type='button' onClick={(event)=>{this.handleRemoveTodo(event, index)}} >Remove</button></li>)}
        </ul>
        <input name='todo' type='text' onChange={this.handleInputChange} value={this.state.newTodo} placeholder='Compile with todo'></input>
        <button type='button' onClick={this.handleAddTodo} disabled={this.state.addButtonState}>Add todo</button>
        <button type='reset' onClick={this.handleListReset}>Reset list</button>
      </div>
    )
  }
}
