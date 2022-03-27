import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil"
import { IToDo, toDoState } from "../../atoms"

function ToDo({ text, category, id }: IToDo) {
  const setToDos = useSetRecoilState(toDoState)
  const onClickCategory = (category: IToDo["category"]) => {
    setToDos(prev => {
      const targetIndex = prev.findIndex(item => item.id === id)
      const newToDo = { text, id, category }
      return [...prev.slice(0, targetIndex), newToDo, ...prev.slice(targetIndex + 1)]
    })
  }
  return <li>
    <span>{text}</span>
    {category !== "DOING" && <button onClick={() => onClickCategory("DOING")}>DOING</button>}
    {category !== "TO_DO" && <button onClick={() => onClickCategory("TO_DO")}>To Do</button>}
    {category !== "DONE" && <button onClick={() => onClickCategory("DONE")}>DONE</button>}
  </li>
}

export default ToDo