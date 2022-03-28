import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil"
import { Categories, IToDo, toDoState } from "../../atoms"

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
    {category !== Categories.DOING && <button onClick={() => onClickCategory(Categories.DOING)}>DOING</button>}
    {category !== Categories.TO_DO && <button onClick={() => onClickCategory(Categories.TO_DO)}>To Do</button>}
    {category !== Categories.DONE && <button onClick={() => onClickCategory(Categories.DONE)}>DONE</button>}
  </li>
}

export default ToDo