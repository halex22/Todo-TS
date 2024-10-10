import { useEffect, useState } from "react"
import Header from "./components/common/header"
import mockTodo from "./mocks.mts"
import { Todos } from "./components/Todos"
import { AddTodo } from "./components/addTodo"
import { FilterBtns } from "./components/filterBtns"
import { filterValue } from "./types"
import { type Todo as TodoType } from "./types"

const App = () : JSX.Element => {

  const [ todos, setTodos ] = useState(mockTodo) 
  const [ completedNumber, setCompletedNumber ] = useState<number>(0)
  const [ filter, setFilter ] = useState<filterValue>('all')

  const handleFilterChange = (newFilterValue: filterValue) => {
    setFilter(newFilterValue)
  }

  const handleRemove = (id: number): void => {
    const newTodos = todos.filter(todo => todo.id !== id)
    setTodos(newTodos)
  }


  const handleAdd = (title: string): void => {
    if (!title) return
    const lastIndex = todos[todos.length -1 ].id
    const newTodo: TodoType = {
      id: lastIndex + 1,
      title: title,
      complete: false
    }
    setTodos((prevState) => [...prevState, newTodo])
  }

  const changeTodoStatus = (id: number): void => {
    const oldTodos = structuredClone(todos) 
    oldTodos.forEach(todo => {
      if (todo.id === id) todo.complete = !todo.complete
    })
    setTodos(oldTodos)
  }

  useEffect(() => {
    const completedTodos = todos.filter(todo => todo.complete)
    setCompletedNumber(completedTodos.length)
  }, [todos])

  return (
    <>
    
    <Header title="Welcome my ToDo app" />

    <div className="mx-[10%] md:mx-[20%] lg:mx-[25%]">

      <FilterBtns changeFilter={handleFilterChange} currentFilter={filter}/>
    
      <div className="flex justify-center border-4 shadow-lg rounded-xl bg-white">
        
        <Todos todos={todos} onRemoveTodo={handleRemove} onChangeStatus={changeTodoStatus} filter={filter}/>
      </div>

      <AddTodo onAddTodo={handleAdd}/>

      <footer className="text-right me-1">
        <small className="font-bold">
          Completed {completedNumber} Total {todos.length} 
        </small>
      </footer>
    </div >
    
    </>
  )
}

export default App

