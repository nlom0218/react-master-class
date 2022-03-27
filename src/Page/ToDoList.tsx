import React from "react"
import { useRecoilState, useRecoilValue } from "recoil"
import { categoryState, toDoSelector, toDoState } from "../atoms"
import CreateToDo from "../Components/ToDoList/CreateToDo"
import ToDo from "../Components/ToDoList/ToDo"

const ToDoList = () => {
  const toDos = useRecoilValue(toDoSelector)
  const [category, setCategory] = useRecoilState(categoryState)

  const onInput = (event: React.FormEvent<HTMLSelectElement>) => {
    const { currentTarget: { value } } = event
    setCategory(value)
  }

  return <div>
    <h1>{category}</h1>
    <hr />
    <select onInput={onInput} value={category}>
      <option value="TO_DO">To Do</option>
      <option value="DOING">Doing</option>
      <option value="DONE">Done</option>
    </select>
    <CreateToDo />
    {toDos.map(todo => <ToDo key={todo.id} {...todo} />)}
  </div>
}

export default ToDoList