import { useRecoilValue } from "recoil"
import { toDoState } from "../atoms"
import CreateToDo from "../Components/ToDoList/CreateToDo"
import ToDo from "../Components/ToDoList/ToDo"

const ToDoList = () => {
  const toDos = useRecoilValue(toDoState)
  return <div>
    <h1>To Dos</h1>
    <CreateToDo />
    <hr />
    <ul>
      {toDos.map(toDo => <ToDo key={toDo.id} {...toDo} />)}
    </ul>
  </div>
}

export default ToDoList