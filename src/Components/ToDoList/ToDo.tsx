import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil"
import { IToDo, toDoState } from "../../atoms"

function ToDo({ text, category, id }: IToDo) {
  const [toDos, setToDos] = useRecoilState(toDoState)
  const onClickCategory = (category: IToDo["category"]) => {
    // const newToDos = toDos.map(item => {
    //   if (item.id === id) {
    //     return { text: item.text, id: item.id, category }
    //   } else {
    //     return item
    //   }
    // })
    // setToDos(newToDos)
    setToDos(prev => {
      const targetIndex = prev.findIndex(item => item.id === id)
      const newToDos = prev.splice(targetIndex, 1, { text, id, category })
      return newToDos
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