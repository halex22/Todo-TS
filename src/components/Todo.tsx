import React, { useState } from "react";
import { useTodosContext } from "../hooks/useTodosContext";
import { type Todo as TodoType } from "../types";

interface RemoveBtnProps {
  id:  number
}

interface EditTodoProps extends RemoveBtnProps {
  title: string
}


const Todo: React.FC<TodoType> = ({ id, title, complete }) => {
  const [ beenModified, setBeenModified ] = useState<boolean>(false)

  const toggleEdit = (): void => {
    setBeenModified((prevState) => !prevState)
  }

  return (
    <div className="flex justify-between">
      {beenModified ? <DisplayEditTodo title={title} id={id}/> :
      <DisplayTodo id={id} title={title} complete={complete}/> }
      
      
      <div>
        {beenModified ? <button onClick={toggleEdit}>✔️</button> : 
        <button onClick={toggleEdit}>✏️</button>}

        <RemoveBtn id={id} />
      </div>
    
    </div>

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
    <button onClick={() => onRemoveTodo(id)} className="me-4">
      <span className=" text-slate-400 hover:text-red-400 h-full">🗙</span>
    </button>
  )
}

const DisplayEditTodo: React.FC<EditTodoProps> = ({ title }) => {
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
