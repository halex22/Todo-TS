import React, { useState } from "react";
import { useTodosContext } from "../hooks/useTodosContext";
import { type Todo as TodoType } from "../types";
import { useEditTodo } from "../hooks/useEditTodo";

interface RemoveBtnProps {
  id:  number
}

interface MinTodoProps {
  title: string
  id: number
}


interface EditComponentProps extends MinTodoProps {
  toggleFunction: () => void
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
        <DisplayEditTodo title={title} id={id} toggleFunction={toggleEdit}/>
        <button onClick={toggleEdit}>✔️</button>
        </div>
      )}

      {!beenModified && (
        <div className="flex justify-between">
          <DisplayTodo id={id} title={title} complete={complete}/>
          <div className="space-x-1">
            <button onClick={toggleEdit}>✏️</button>
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
    <label className={`ps-1 ${complete && completedStyles}`}> {title} </label>
  </div>
  )
}



const RemoveBtn: React.FC<RemoveBtnProps> = ({ id }) => {
  const {handleRemove: onRemoveTodo} = useTodosContext()
  return (
    <button onClick={() => onRemoveTodo(id)} >
      <span className=" text-slate-400 hover:text-red-400 h-full">🗙</span>
    </button>
  )
}




const EditBtn: React.FC<EditBtnProps> = ({ toggleFunction, newTitle, id }) => {
  const { handleEditTodo } = useTodosContext()

  const handleTodosTitleChange = (): void => {
    toggleFunction()
    handleEditTodo(id, newTitle)
  }

  return (
    <button onClick={handleTodosTitleChange}>✔️</button>
  )
}


const DisplayEditTodo: React.FC<EditComponentProps> = ({ title, id, toggleFunction }) => {
  const [ todoTitle, setTodoTitle ] = useState<string>(title)

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setTodoTitle(event.target.value)
  }

  return (
    <>
    <input type="text" value={todoTitle} onChange={handleChange}
      className="focus:outline-none border-slate-300 border-[1px] rounded-lg ps-2"
    />
    </>
  )
}

export default Todo;
