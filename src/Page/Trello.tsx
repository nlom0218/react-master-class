import { DragDropContext, Draggable, Droppable, DropResult } from "react-beautiful-dnd"
import { useRecoilState } from "recoil"
import styled from "styled-components"
import { toDosState } from "../atoms"
import DragabbleCard from "../Components/Trello/DragabbleCard"

const Wrapper = styled.div`
  display: flex;
  max-width: 480px;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  height: 100vh;
`

const Boards = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(1, 1fr);
`

const Board = styled.div`
  background-color: ${props => props.theme.boardColor};
  transition: background-color 1s ease;
  padding: 20px 10px;
  padding-top: 30px;
  border-radius: 5px;
  min-height: 200px;
`

const Trello = () => {

  const [toDos, setToDos] = useRecoilState(toDosState)

  const onDragEnd = ({ destination, source }: DropResult) => {
    if (!destination) return
    setToDos(prevToDos => {
      const copyToDos = [...prevToDos]
      copyToDos.splice(source.index, 1)
      copyToDos.splice(destination.index, 0, prevToDos[source.index])
      return copyToDos
    })
  }

  return <DragDropContext onDragEnd={onDragEnd}>
    <Wrapper>
      <Boards>
        <Droppable droppableId="one">
          {(magic) =>
            <Board ref={magic.innerRef} {...magic.droppableProps}>
              {toDos.map((toDo, index) => <DragabbleCard key={index + ""} index={index} toDo={toDo} />)}
              {magic.placeholder}
            </Board>
          }
        </Droppable>
      </Boards>
    </Wrapper>
  </DragDropContext >
}

export default Trello