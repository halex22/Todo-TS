import { type Todo as TodoType } from "../types"

interface Props extends TodoType {
  handleChangeStatus: () => void;
}


const Todo: React.FC<Props> = ({ id, title, complete, handleChangeStatus }) => {
  return (
    <div className="flex space-x-2" key={id}>
      <input 
        type="checkbox" 
        checked={complete}
        onChange={handleChangeStatus}
        className={``}
      />
      <label> {title} </label>
    </div>
  )
}

export default Todo