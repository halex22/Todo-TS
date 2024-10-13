import Header from "./components/common/header"
import { Todos } from "./components/Todos"
import { AddTodo } from "./components/addTodo"
import { FilterBtns } from "./components/filterBtns"
import { useTodosContext } from "./hooks/useTodosContext"
import { useFilteredTodosContext } from "./hooks/useFilteredTodosContext"


const App = () : JSX.Element => {

  const {filteredTodos: todos } = useFilteredTodosContext()
  const {handleAdd} = useTodosContext()

  const completedNumber = 1

  return (
    <>
    
    <Header title="Welcome my ToDo app" />

    <div className="mx-[5%] md:mx-[20%] lg:mx-[25%]">

      <FilterBtns />
    
      <div className="flex justify-center border-4 shadow-lg rounded-xl bg-white">
        
        <Todos/>
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

