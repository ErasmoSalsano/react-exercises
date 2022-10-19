import { useState } from "react"

export function TodoList({children}){

  const InitialValue = {
    items: [],
    newTodo: '',
    addButtonState: true
  }

  const [todos, setTodos] = useState(InitialValue)

  const handleInputChange = (event) => {
    setTodos((todos)=>{
      return {
        ...todos,
        newTodo: event.target.value,
      }
    })
  }

  const handleAddTodo = ()=>{
    setTodos((todos)=>{
      return {
        ...todos,
        items: [...todos.items, todos.newTodo],
        newTodo: '',
      }
    })
  }

  const handleRemoveTodo = (event, toRemove)=>{
    // console.log(event.target, event.target.index)
    setTodos((todos)=>{
      return{
        ...todos,
        items: todos.items.filter((item, index) => index!==Number(toRemove))
      }
    })
  }

  const handleListReset = ()=>{
    setTodos(InitialValue)
  }

  return(
    <div>
        {/* For Render-Props-01 */}
        {/* {this.props.render(this.state.items, this.handleRemoveTodo)} */}
        {/* For Render-Props-02 */}
        {children(todos.items, handleRemoveTodo)}
        <input name='todo' type='text' onChange={handleInputChange} value={todos.newTodo} placeholder='Compile with todo'></input>
        <button type='button' onClick={handleAddTodo} disabled={!todos.newTodo}>Add todo</button>
        <button type='reset' onClick={handleListReset}>Reset list</button>
      </div>
  )
}