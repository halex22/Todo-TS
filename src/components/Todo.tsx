import React, { useState } from "react";
import { useTodosContext } from "../hooks/useTodosContext";
import { type Todo as TodoType } from "../types";
import { useEditTodo } from "../hooks/useEditTodo";
import { PencilSvg } from "./svg/pencil";
import { DeleteSvg } from "./svg/delete";

interface RemoveBtnProps {
  id:  number
}

interface EditComponentProps {
  title: string
  handleChange: (newTodoValue: string) => void
}


const Todo: React.FC<TodoType> = ({ id, title, complete }) => {

  const [ beenModified, setBeenModified ] = useState<boolean>(false)

  const {currentTodoTitleValue, saveChanges, handleInputChange} = useEditTodo(title)

  const toggleEdit = (): void => {
    setBeenModified((prevState) => !prevState)
  }

  return (
    <>      
      {beenModified && (
        <div className="flex">
        <DisplayEditTodo title={currentTodoTitleValue}  handleChange={handleInputChange}/>
        <button onClick={() => {
          toggleEdit()
          saveChanges(id)
        }}>✔️</button>
        </div>
      )}

      {!beenModified && (
        <div className="block xs:flex justify-between">
          <DisplayTodo id={id} title={title} complete={complete}/>
          <div className="space-x-1 flex justify-center">
            <button onClick={toggleEdit}>
              <PencilSvg />
            </button>
            <RemoveBtn id={id} />
          </div>
        </div>        
      )}    
    </>

  );
};


const DisplayTodo: React.FC<TodoType> = ({ id, complete, title}) => {

  const {changeTodoStatus: handleChangeStatus} = useTodosContext()
  const completedStyles = 'bg-slate-200/80  rounded-xl line-through decoration-slate-800 decoration-double'

  return (
  <div className="flex space-x-2"  key={id}>
    <input 
      type="checkbox" 
      checked={complete}
      onChange={() => handleChangeStatus(id)}
      className={``}
    />
    <label className={`px-4 ${complete && completedStyles}`}> {title} </label>
  </div>
  )
}


const RemoveBtn: React.FC<RemoveBtnProps> = ({ id }) => {
  const {handleRemove: onRemoveTodo} = useTodosContext()
  return (
    <button onClick={() => onRemoveTodo(id)} >
      <DeleteSvg />
      {/* <span className=" text-slate-400 hover:text-red-400 transition-colors duration-300 h-full">🗙</span> */}
    </button>
  )
}


const DisplayEditTodo: React.FC<EditComponentProps> = ({ title, handleChange }) => {

  const userInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    handleChange(event.target.value)
  }

  return (
    <>
    <input type="text" value={title} onChange={userInputChange}
      className="focus:outline-none border-slate-300 border-[1px] rounded-lg ps-2 w-full"
    />
    </>
  )
}

export default Todo;
