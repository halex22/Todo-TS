import React from "react"
import { type filterValue } from "../types"
import { TODO_FILTERS } from "../const"
import { useFilteredTodosContext } from "../hooks/useFilteredTodosContext"


interface BtnProps {
  text: filterValue;
  setFilterOnClick: () => void;
}


export const FilterBtns: React.FC = () => {

  const {filter: currentFilter, handleFilterChange: changeFilter} = useFilteredTodosContext()
  return (
  <section className="px-2 space-x-4 flex justify-end">
    { Object.entries(TODO_FILTERS).map(([, value], index) => (
      <div key={index} className={`border-2 rounded-lg ${currentFilter === value ? 'border-green-600' : 'border-white'}`}>
        <Btn text={value} setFilterOnClick={() => {changeFilter(value as filterValue)}} />
      </div>
    ))}
  </section>
  )
}


const Btn: React.FC<BtnProps> = ({ text, setFilterOnClick }) => {
  return (
    <button className="px-2 py-1 " onClick={setFilterOnClick}>
      <span className="capitalize">{text}</span>
    </button>
  )
}
