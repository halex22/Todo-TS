import { useState } from "react"
import Header from "./components/common/header"
import mockTodo from "./mocks.mts"
import { Todos } from "./components/Todos"
import { type Todo as TodoType } from "./types"

const App = () : JSX.Element => {

  const [todos, setTodos] = useState(mockTodo) 

  const handleRemove = (id: number): void => {
    const newTodos = todos.filter(todo => todo.id !== id)
    setTodos(newTodos)
  }

  const handleAdd = (title: string): void => {
    const lastIndex = todos[todos.length -1 ].id
    const newTodo: TodoType = {
      id: lastIndex + 1,
      title: title,
      complete: false
    }
    setTodos((prevState) => [...prevState, newTodo])
  }

  return (
    <>
    
    <Header title="Welcome my ToDo app" />

    <div className="mx-[10%] md:mx-[20%] lg:mx-[25%]">
      <div className="flex justify-center border-4 shadow-lg rounded-xl">
        <Todos todos={todos} onRemoveTodo={handleRemove}/>
      </div>


      <div className="my-2 space-x-4 ps-1">
        <label htmlFor="" className="text-slate-500 font-bold">New Todo </label>         
        
        <input type="text" className="focus:outline-none border-4 rounded-lg"/>
        <button className="border-2 px-2 py-1 rounded-lg bg-slate-200 hover:bg-slate-300">
          <span className="text-slate-500 font-bold">Add</span>
        </button>
      </div>

      <div className="text-right me-1">
        <small className="font-bold">Total {todos.length} </small>
      </div>
    </div >


    
    </>
  )
}

export default App

