import Header from "./components/common/header"
import { Todos } from "./components/Todos"
import { AddTodo } from "./components/addTodo"
import { FilterBtns } from "./components/filterBtns"
import { FooterSummary } from "./components/footerSummary"


const App = () : JSX.Element => {

  return (
    <>    
    <Header title="Welcome my ToDo app" />

    <div className="mx-[5%] md:mx-[7%] lg:mx-[10%]">
      <FilterBtns />    

      <div className="flex justify-center border-4 shadow-lg rounded-xl bg-white">
        <Todos />
      </div>

      <AddTodo />

      <FooterSummary />

    </div >
    
    </>
  )
}

export default App

