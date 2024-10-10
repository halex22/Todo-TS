import { type Todo as TodoType } from "../types"

// interface Props extends TodoType {
//   // onRemoveTodo: () => void
// }

const Todo: React.FC<TodoType> = ({ id, title, complete }) => {
  return (
    <div className="flex space-x-2" key={id}>
      <input 
        type="checkbox" 
        checked={complete}
        onChange={() => {}}
        className={``}
      />
      <label> {title} </label>
    </div>
  )
}

export default Todo